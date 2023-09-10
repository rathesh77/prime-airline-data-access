import express from 'express';
import CurrencyService from '../services/CurrencyService';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/currencies', async (req: Request, res: Response) => {
  res.send(await CurrencyService.getAllCurrencies());
});

export default router;