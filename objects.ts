var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}


var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

console.log("object destructuring=====");

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);




function display(id:number, name:string, role?:string) 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
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
 
var array :any = ["J&J","pfizer","SP utnick",]
console.log(array);

console.log("====array after adding covaxin");
array.push("Covaxin")
console.log(array);

console.log("===Traversing array====");

for (const element of array) {
    console.log(element);
    
}

console.log("===Array destructuring=====");
var [v1,v2,v3,v4] = array
console.log(v1,v2,v3,v4);

console.log('***********************************************************************');
console.log("=======Assignment on object=========");


var s1 = {
    firstName: "sana",
    lastName: "Patel",
    degree :"Msc(physics)",
    city : "pune"
}
console.log(s1);
console.log("=======object destructuring======");

var {firstName: userFirstName, lastName: userLastName, degree:userDegree,city:userCity} = s1;

console.log(userFirstName,userLastName,userDegree,userCity);
//console.log(userLastName);