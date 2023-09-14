import express from 'express';
import { Request, Response } from 'express';
import BookService from '../services/book.service';

const router = express.Router();

router.post('/book', (req: Request, res: Response) => {
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
  
export default router;