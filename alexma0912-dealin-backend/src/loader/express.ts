import express from 'express';
import helmet from 'helmet';
import 'express-async-errors';
import cors from 'cors';
import config from '../app/config';
import connectToDB from '../app/utils/db';
import healthCheckRouter from '../app/routes/v1/healthCheck';
import geoLocationRouter from '../app/routes/v1/geoLocationRouter';
import addressAutoComplete from '../app/routes/v1/addressAutoComplete';
import adminRouter from '../app/routes/v1/admin';
import postRouter from '../app/routes/v1/posts';
import rechargesRouter from '../app/routes/v1/recharges';
import userRouter from '../app/routes/v1/users';
import uploadRouter from '../app/routes/v1/uploadImages';
import notificationRouter from '../app/routes/v1/notifications';
import resetPasswordRouter from '../app/routes/v1/resetPassword';
import { errorHandler } from '../app/middleware/errorHandler';
import stripeRouter from '../app/routes/v1/stripe';
import multer from 'multer';
import { StatsD } from 'node-statsd';
import postCodeSearchRouter from '../app/routes/v1/postCodeSearch';

const startServer = () => {
  const application: express.Express = express();
  application.use(helmet());
  application.use(cors());

  // -------the block below is used for exposing metric for statsd----------
  const statsd = new StatsD({
    host: 'localhost', // statsd server address
    port: 8125,
  });

  // Add error monitoring logic
  statsd.socket.on('error', function (error) {
    return console.error('Error in socket: ', error);
  });

  application.use((req, res, next) => {
    const start = new Date().getTime();

    // Sampling rate
    const sampleRate = 1;

    statsd.increment('total_requests', 1, sampleRate);
    statsd.histogram('request_size', req.headers['content-length'] || 0, sampleRate);
    statsd.gauge('memory_usage', process.memoryUsage().heapUsed, sampleRate);

    res.on('finish', () => {
      const duration = new Date().getTime() - start;
      statsd.timing('response_time', duration, sampleRate);
      statsd.histogram('http_request_duration_seconds', duration, sampleRate);
      if (res.statusCode >= 200 && res.statusCode < 300) {
        statsd.increment('2xx_responses', 1, sampleRate);
      }
      if (res.statusCode >= 300 && res.statusCode < 400) {
        statsd.increment('3xx_responses', 1, sampleRate);
      }
      if (res.statusCode >= 400 && res.statusCode < 500) {
        statsd.increment('4xx_responses', 1, sampleRate);
      }
      if (res.statusCode >= 500 && res.statusCode < 600) {
        statsd.increment('5xx_responses', 1, sampleRate);
      }
    });
    next();
  });

  // ----------the code above are used for exposing node api metric-------------
  try {
    application.listen(config.port, () => {
      console.log('SERVER STARTED');
    });
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
  connectToDB();
  return application;
};

export default () => {
  const app = startServer();
  const upload = multer();
  // app.use(express.json());
  app.use(config.api.prefix, stripeRouter);
  app.use(config.api.prefix, healthCheckRouter);
  app.use(config.api.prefix, geoLocationRouter);
  app.use(config.api.prefix, addressAutoComplete);
  app.use(config.api.prefix, adminRouter);
  app.use(config.api.prefix, postRouter);
  app.use(config.api.prefix, rechargesRouter);
  app.use(config.api.prefix, userRouter);
  app.use(config.api.prefix, uploadRouter);
  app.use(config.api.prefix, notificationRouter);
  app.use(config.api.prefix, upload.any(), resetPasswordRouter);
  app.use(config.api.prefix, postCodeSearchRouter);

  app.use(errorHandler);
  return app;
};
