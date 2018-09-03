"use strict";
var Sizes = /** @class */ (function () {
    function Sizes(seats) {
        this.seats = seats;
    }
    Object.defineProperty(Sizes.prototype, "availableSeats", {
        get: function () {
            return this.seats;
        },
        set: function (seats) {
            this.seats = seats;
        },
        enumerable: true,
        configurable: true
    });
    return Sizes;
}());
var seats = new Sizes([60, 40]);
// invoke getter
console.log(seats);
// invoke setter
seats.availableSeats = [60, 60];
console.log(seats.availableSeats);
var College = /** @class */ (function () {
    function College(name) {
        this.name = name;
        this.streams = [];
    }
    College.prototype.addStreams = function (stream) {
        this.streams.push(stream);
    };
    return College;
}());
var college = new College('Pepperoni');
college.addStreams('pepperoni');
