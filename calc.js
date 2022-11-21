"use strict";
exports.__esModule = true;
exports.Calculator2 = exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
var Calculator2 = /** @class */ (function () {
    function Calculator2() {
    }
    Calculator2.prototype.area = function (pi, radius) {
        return pi * radius * radius;
    };
    Calculator2.pi = 3.14;
    return Calculator2;
}());
exports.Calculator2 = Calculator2;
// function add( x:number,y:number){
//     return x+y
// }
// function sub( x:number,y:number){
//     return x-y
// }
// export{add,sub}
