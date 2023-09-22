import { Request, Response } from 'express';
import config from '../config/index';
import axios from 'axios';

const api_key = config.google_map_api;

const geoLocation = async (req: Request, res: Response) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  console.log(latitude, longitude);
  let postal_code = null;

  try {
    // no-secrets-ignore-next-line
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`;
    const response = await axios.get(url);
    const results = response.data.results;

    for (const addressComponent of results[0].address_components) {
      if (addressComponent.types.includes('postal_code')) {
        postal_code = addressComponent.short_name;
        break;
      }
    }

    if (postal_code) {
      console.log(postal_code);
      res.status(201).json(postal_code);
    } else {
      throw new Error('Postal code not found');
    }
  } catch (error) {
    console.error('Error fetching postal code:', error);
    return res.status(500).send('Error fetching postal code');
  }
};

export default geoLocation;
