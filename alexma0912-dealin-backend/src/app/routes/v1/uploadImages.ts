import { Router } from 'express';
import { imageUpload } from '../../controllers/uploadImages';
import multer from 'multer';
import { authGuard } from '../../middleware/authGuard';
import express from 'express';

const upload = multer();

const uploadRouter = Router();
uploadRouter.use(express.json());
uploadRouter.post('/upload', upload.single('file'), authGuard, imageUpload);

export default uploadRouter;
