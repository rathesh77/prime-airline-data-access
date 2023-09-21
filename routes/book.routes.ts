import express from 'express';
import { Request, Response } from 'express';
import BookService from '../services/book.service';

const router = express.Router();

router.post('/book', (req: Request, res: Response) => {
  const book = BookService.createBook(req.body.book);
  if (!book) {
    res.status(200);
    res.send({
      'code': 'NO_AVAILABLE_SEATS',
      'message': 'There is no available seats for this flight.'
    });
    return;
  }
  res.send(book);
});

router.get('/booking-history', (req: Request, res: Response) => {
  const bookingHistory = BookService.getBookingHistory(+req.session.userId!);
 
  res.send(bookingHistory);
});

export default router;