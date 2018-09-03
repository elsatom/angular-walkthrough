"use strict";
var College = /** @class */ (function () {
    function College(name) {
        this.streams = [];
        this.name = name;
    }
    College.prototype.addStream = function (stream) {
        this.streams.push(stream);
    };
    return College;
}());
var college = new College('CET');
college.addStream('EC');
console.log(college);
