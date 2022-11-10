var emp = {
    name: "Dnyanesh",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
console.log("object destructuring=====");
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
// function display(id:number, name:string, role?:string) 
// {
//     console.log("Id", id);
//     console.log("Name", name);
//     if(role!= undefined)
//     {
//         console.log("Role", role);
//     }
// }
console.log("*********************************************************");
console.log("==Assignment on array===========");
console.log("====Given array=====");
var array = ["J&J", "pfizer", "SP utnick",];
console.log(array);
console.log("====array after adding covaxin");
array.push("Covaxin");
console.log(array);
console.log("===Traversing array====");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log(element);
}
console.log("===Array destructuring=====");
var v1 = array[0], v2 = array[1], v3 = array[2], v4 = array[3];
console.log(v1, v2, v3, v4);
console.log('***********************************************************************');
console.log("=======Assignment on object=========");
var s1 = {
    firstName: "sana",
    lastName: "Patel",
    degree: "Msc(physics)",
    city: "pune"
};
console.log(s1);
console.log("=======object destructuring======");
var userFirstName = s1.firstName, userLastName = s1.lastName, userDegree = s1.degree, userCity = s1.city;
console.log(userFirstName, userLastName, userDegree, userCity);
//console.log(userLastName);
