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
console.log("============Assignment on Polymorphism======================================");
var College = /** @class */ (function () {
    function College() {
    }
    College.prototype.print = function () {
        console.log("*****Person Details*******");
    };
    return College;
}());
var Principal = /** @class */ (function (_super) {
    __extends(Principal, _super);
    function Principal(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    Principal.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, " Of  MIT College."));
    };
    return Principal;
}(College));
var AssistantTeacher = /** @class */ (function (_super) {
    __extends(AssistantTeacher, _super);
    function AssistantTeacher(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    AssistantTeacher.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, "  in MIT College."));
    };
    return AssistantTeacher;
}(College));
var Administrator = /** @class */ (function (_super) {
    __extends(Administrator, _super);
    function Administrator(firstName, lastName, role) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.role = role;
        return _this;
    }
    Administrator.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is a ").concat(this.role, "  in MIT college ."));
    };
    return Administrator;
}(College));
var college1 = new Array(new Principal("Mrs.Renuka", "Patil", "Principal"), new AssistantTeacher("Mr.Rohit", "Patil", "AssistantTeacher"), new Administrator("Mr.Akash", "Sharma", "Administrator"));
for (var _i = 0, college1_1 = college1; _i < college1_1.length; _i++) {
    var char = college1_1[_i];
    char.print();
}
