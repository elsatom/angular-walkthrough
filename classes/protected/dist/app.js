"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Seats = /** @class */ (function () {
    function Seats(seats) {
        this.seats = seats;
    }
    Object.defineProperty(Seats.prototype, "availableSeats", {
        get: function () {
            return this.seats;
        },
        set: function (seats) {
            this.seats = seats;
        },
        enumerable: true,
        configurable: true
    });
    return Seats;
}());
exports.Seats = Seats;
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College(name, seats) {
        var _this = _super.call(this, seats) || this;
        _this.name = name;
        _this.seats = seats;
        _this.streams = [];
        return _this;
    }
    College.prototype.updateSeats = function (sizes) {
        this.seats = sizes;
    };
    College.prototype.addStream = function (stream) {
        this.streams.push(stream);
    };
    return College;
}(Seats));
var college = new College('SAINTGITS', [60, 40]);
college.addStream('AEI');
college.updateSeats([80, 90]);
console.log(college);
