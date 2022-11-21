var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name));
    };
    return Organizer;
}());
var objOrganizer = new Organizer(123, "Rohit Patil");
objOrganizer.display();
var Events = /** @class */ (function () {
    function Events(id, name, description, startTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    Events.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name, ",Description:").concat(this.description, ",Start Time:").concat(this.startTime));
    };
    return Events;
}());
var objEvents = new Events(123, "Rohit Patil", " Annual sport day of school", "10am");
objEvents.display();
var Venue = /** @class */ (function () {
    function Venue(id, name, description, startTime, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name, ",Description:").concat(this.description, ", Start Time:").concat(this.startTime, "  venue is:").concat(this.address));
    };
    return Venue;
}());
var objVenue = new Venue(123, "Rohit Patil", " Annual sport day of school", "10am", "Balewadi Stedium Pune");
objVenue.display();
console.log("Practice of display()....");
var Girl = /** @class */ (function () {
    function Girl(name, height, Weight, classes, RollNo, selected) {
        this.name = name;
        this.height = height;
        this.Weight = Weight;
        this.classes = classes;
        this.RollNo = RollNo;
        this.selected = selected;
    }
    Girl.prototype.display = function () {
        console.log(this.name + " " + this.height + " " + this.Weight + " " + this.classes + " " + this.RollNo + " " + this.selected);
    };
    return Girl;
}());
// var objGirls = new Girl("Richa","225cm","37kg","4c",15,true)
var girls = new Array(new Girl("Richa", "225cm", "37kg", "4c", 41, true));
for (var _i = 0, girls_1 = girls; _i < girls_1.length; _i++) {
    var char = girls_1[_i];
    char.display();
}
