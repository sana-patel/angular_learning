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
var objGirls = new Girl("Richa", "225cm", "37kg", "4c", 15, true);
// let girls : Girl[] = new Array(new Girl("Richa patil","225cm","37kg","4c",41 ,true))
objGirls.display();
console.log("***************************************************");
var Organizer1 = /** @class */ (function () {
    function Organizer1(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer1.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name));
    };
    return Organizer1;
}());
var objOrganizer = new Organizer(123, "Prashant Patil");
objOrganizer.display();
var Events2 = /** @class */ (function () {
    function Events2(id, name, description, startTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    Events2.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name, ",Description:").concat(this.description, ",Start Time:").concat(this.startTime));
    };
    return Events2;
}());
var objEvents = new Events(342, "Rohit sharma", " Annual  day of school", "11am");
objEvents.display();
var Venue1 = /** @class */ (function () {
    function Venue1(id, name, description, startTime, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.address = address;
    }
    Venue1.prototype.display = function () {
        console.log("ID is ".concat(this.id, " ,Name : ").concat(this.name, ",Description:").concat(this.description, ", Start Time:").concat(this.startTime, "  venue is:").concat(this.address));
    };
    return Venue1;
}());
var objVenue = new Venue(123, "Rohit Patil", " Annual  day of school", "10am", "Sawitribaiphule multipurpose hall Pune.");
objVenue.display();
