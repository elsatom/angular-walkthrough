class College {
  public streams: string[] = [];

  constructor(readonly name: string) {}

  public addStreams(stream: string) {
    this.streams.push(stream);
  }
}

const college = new College('SAINTGITS');

college.addStreams('AEI');

console.log(college);
