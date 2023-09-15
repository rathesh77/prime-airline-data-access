import express from 'express';
import { Request, Response } from 'express';
import DiscountService from '../services/discount.service';

const router = express.Router();

router.get('/discounts', async (req: Request, res: Response) => {
  try {
    
    res.send( await DiscountService.getDiscounts());
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': e
    });
  }
});

export default router;