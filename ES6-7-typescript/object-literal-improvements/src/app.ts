// OBJECT LITERAL IMPROVEMENTS
const schedule = {
  portName: 'Singapore',
  price: 150,
  getName() {
    return this.portName;
  },
};

console.log(schedule.getName());

const destinations = ['China','Japan'];

function createRFQ(schedule: any, destinations: any) {
  return { schedule, destinations };
}

console.log(createRFQ(schedule, destinations));