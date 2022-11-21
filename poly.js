// class Employee {
//     public firstName: string;
//     public lastName: string;
//     public designation: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     public Print(): void {
//         console.log("Employee details");
//     }
// }
// class Manger extends Employee {
//     // constructor 
//     constructor(firstName: string, lastName: string, designation: string) {
//         // calling parent class constructor.
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.designation = designation;
//     }
//     // overriding parent class print method .
//     public Print(): void {
//         super.Print()
//         console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
//     }
// }
// class Lead extends Employee {
//     // constructor 
//     constructor(firstName: string, lastName: string, designation: string) {
//         // calling parent class constructor.
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.designation = designation;
//     }
//     // overriding parent class print method .
//     public Print(): void {
//         super.Print()
//         console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
//     }
// }
// class Developer extends Employee {
//     // constructor 
//     constructor(firstName: string, lastName: string, designation: string) {
//         // calling parent class constructor.
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.designation = designation;
//     }
//     // overriding parent class print method .
//     public Print(): void {
//         super.Print()
//         console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
//     }
// }
// let employees: Employee[] = new Array(new Manger("Jack", "Sparrow", "Manger"), new Lead("Sumit", "Pande", "Lead"), new Developer("Dnyanesh", "Surya", "Developer"));
// for(var emp of employees) {
//     emp.Print();
// }
console.log("============Assignment on Polymorphism======================================");
var Women = /** @class */ (function () {
    function Women() {
    }
    Women.prototype.print = function () {
        console.log("Women Details.");
    };
    return Women;
}());
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    Mother.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, " of two children's."));
    };
    return Mother;
}(Women));
var daughter = /** @class */ (function (_super) {
    __extends(daughter, _super);
    function daughter(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    daughter.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, " of her parents."));
    };
    return daughter;
}(Women));
var softwareDeveloper = /** @class */ (function (_super) {
    __extends(softwareDeveloper, _super);
    function softwareDeveloper(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    softwareDeveloper.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, " at Wipro compony ."));
    };
    return softwareDeveloper;
}(Women));
var Women1 = new Array(new daughter("Radha", "Patil", "daughter"), new Mother("Radha", "Patil", "Mother"), new softwareDeveloper("Radha", "Patil", "softwareDeveloper"));
for (var _i = 0, Women1_1 = Women1; _i < Women1_1.length; _i++) {
    var char = Women1_1[_i];
    char.print();
}
