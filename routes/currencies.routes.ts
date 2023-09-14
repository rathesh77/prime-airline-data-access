import express from 'express';
import CurrencyService from '../services/currency.service';
import { Request, Response } from 'express';
import mustBeAuthenticated from '../middlewares/mustBeAuthenticated';

const router = express.Router();

router.get('/currencies',mustBeAuthenticated, async (req: Request, res: Response) => {
  res.send(await CurrencyService.getAllCurrencies());
});

export default router;