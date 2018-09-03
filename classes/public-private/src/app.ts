class College {
  public streams: string[] = [];

  constructor(private name: string) {}

  public addStream(addStream: string) {
    this.streams.push(addStream);
  }
}

const college = new College('SAINTGITS');

college.addStream('AEI');

console.log(college);