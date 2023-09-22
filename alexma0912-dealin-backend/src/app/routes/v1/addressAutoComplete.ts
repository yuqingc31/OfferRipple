import { Router } from 'express';
import addressComplete from '../../controllers/addressAutoComplete';
import express from 'express';

const addressAutoComplete = Router();
addressAutoComplete.use(express.json());
addressAutoComplete.get('/addressAutoComplete', addressComplete);

export default addressAutoComplete;
