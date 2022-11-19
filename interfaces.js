console.log("creating interface============");
var objproduct = {
    id: 123,
    name: "Iphone",
    description: "It's awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
var objproduct1 = {
    id: 456,
    name: "android",
    description: "It's good to use",
    price: 20000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log('Assignment============interface');
var objStudent = {
    rollNumber: 1,
    name: "Rohit Patil",
    "class": "BE.IIC",
    email: "abc@gmail.com",
    marks: 513,
    isApplicableRound2: true,
    display: function () {
        console.log(this.rollNumber + " " + this.name + " " + this["class"] + " " + this.email + " " + this.marks + " " + this.isApplicableRound2 + " ");
    }
};
