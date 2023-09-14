import DiscountDto from './discount.dto';
import MealDto from './meal.dto';

type Flight = {
    id: number, 
    airportDeparture: string, 
    airportArrival: string, 
    seats: number, 
    price: number, 
    date?: string, 
    discounts?: DiscountDto[], 
    isLongDuration?: boolean, 
    meals?: MealDto[], 
    planeId: number
}

class FlightDto {
  id;
  airportDeparture;
  airportArrival;
  price;
  planeId;
  seats;
  date;
  discounts;
  isLongDuration;
  meals;

  constructor(data: Flight) {
    this.id = data.id;
    this.airportDeparture = data.airportDeparture;
    this.airportArrival = data.airportArrival;
    this.seats = data.seats;
    this.price = data.price;
    this.date = data.date;
    this.discounts = data.discounts;
    this.isLongDuration = data.isLongDuration;
    this.meals = data.meals;
    this.planeId = data.planeId;

  }
}

export default FlightDto;