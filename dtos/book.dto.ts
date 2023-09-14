type Book = {
    userId: string,
    flightId: number,
    date: string
}

class BookDto {
  userId;
  flightId;
  date;

  constructor(data: Book) {
    this.userId = data.userId;
    this.flightId = data.flightId;
    this.date = data.date;

  }
}

export default BookDto;