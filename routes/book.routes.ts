import express from 'express';
import { Request, Response } from 'express';
import BookService from '../services/book.service';
import mustBeAuthenticated from '../middlewares/mustBeAuthenticated';

const router = express.Router();

router.post('/book', mustBeAuthenticated, (req: Request, res: Response) => {
  const book = BookService.createBook(req.body);
  if (!book) {
    res.status(409);
    res.send({
      'code': 'NO_AVAILABLE_SEATS',
      'message': 'There is no available seats for this flight.'
    });
    return;
  }
  res.send(book);
});

router.get('/booking-history', mustBeAuthenticated, (req: Request, res: Response) => {
  const bookingHistory = BookService.getBookingHistory(req.session.userId!);
 
  res.send(bookingHistory);
});


export default router;