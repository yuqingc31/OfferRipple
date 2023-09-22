import config from '../config/index';
import { Request, Response } from 'express';
import axios from 'axios';

const api_key = config.google_map_api;
const addressAutoComplete = async (req: Request, res: Response) => {
  const { input } = req.query;
  try {
    const response =await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${api_key}`,
      );
    const results = response.data.predictions;
    const allAddress = results.map((result: any) => result.description);
    res.status(200).send(allAddress);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export default addressAutoComplete;
