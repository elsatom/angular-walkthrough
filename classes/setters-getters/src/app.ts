class Sizes {
  constructor(public seats: number[]) {}

  set availableSeats(seats: number[]) {
    this.seats = seats;
  }

  get availableSeats() {
    return this.seats;
  }
}

const seats = new Sizes([60, 40]);

// invoke getter
console.log(seats);
// invoke setter
seats.availableSeats = [60, 60];

console.log(seats.availableSeats);

class College {
  public streams: string[] = [];

  constructor(readonly name: string) {}

  public addStreams(stream: string) {
    this.streams.push(stream);
  }
}

const college = new College('Pepperoni');

college.addStreams('pepperoni');