class College {
  name: string;
  streams: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStream(stream: string) {
    this.streams.push(stream);
  }
}

const college = new College('CET');

college.addStream('EC');

console.log(college);