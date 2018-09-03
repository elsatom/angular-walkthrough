export abstract class Seats {
  constructor(public seats: number[]) {}

  set availableSeats(seats: number[]) {
    this.seats = seats;
  }

  get availableSeats() {
    return this.seats;
  }
}

class College extends Seats {
  public streams: string[] = [];

  constructor(readonly name: string, public seats: number[]) {
    super(seats);
  }

  public addStream(stream: string) {
    this.streams.push(stream);
  }
}

const college = new College('SAINTGITS', [60, 40]);
college.addStream('AEI');

console.log(college);