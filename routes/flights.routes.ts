import express from 'express';
import { Request, Response } from 'express';
import FlightService from '../services/flight.service';

const router = express.Router();

router.get('/flights/available-seats', async (req: Request, res: Response) => {
  try {
    
    let flightId: number = 0;
    if (req.query.flightId != undefined) {
      flightId = +req.query.flightId;
    }

    if (typeof flightId !== 'number'){
      res.status(400);
      return;
    }
    if (typeof req.query.date !== 'string') {
      res.status(400);
      return;
    }

    const flights = await FlightService.getAvailableSeats(flightId, req.query.date);
    const flightSeats = {flight: flights};
    res.send(flightSeats);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': e
    });
  }
});

router.get('/flights', async (req: Request, res: Response) => {
  try {
    res.send(await FlightService.getFlights());
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': e
    });
  }
});

export default router;