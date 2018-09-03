"use strict";
var College = /** @class */ (function () {
    function College(name) {
        this.name = name;
        this.streams = [];
    }
    College.prototype.addStream = function (addStream) {
        this.streams.push(addStream);
    };
    return College;
}());
var college = new College('SAINTGITS');
college.addStream('AEI');
console.log(college);
