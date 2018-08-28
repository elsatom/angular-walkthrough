"use strict";
// OBJECT LITERAL IMPROVEMENTS
var schedule = {
    portName: 'Singapore',
    price: 150,
    getName: function () {
        return this.portName;
    },
};
console.log(schedule.getName());
var destinations = ['China', 'Japan'];
function createRFQ(schedule, destinations) {
    return { schedule: schedule, destinations: destinations };
}
console.log(createRFQ(schedule, destinations));
