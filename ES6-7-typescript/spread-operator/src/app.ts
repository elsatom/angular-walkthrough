// Spread operator - arrays
const origins = ['singapore', 'china'];

const destinations = ['japan'];

const allPorts = [...origins, ...destinations];

console.log(allPorts);

// Spread operator - objects

// const origin = {
//   name: 'Singapore',
// };

// const destinations = ['china', 'japan'];

// const order = Object.assign({}, origin, { destinations });

// const spreadOrder = { ...origin, destinations };

// console.log(order, spreadOrder);