import DiscountDto from '../dtos/discount.dto';
import InMemoryData from '../utils/InMemoryData';


class DiscountService {

  static getDiscounts(): DiscountDto[] {
    return InMemoryData.discounts;
  }
}

export default DiscountService;