interface IInfo {
    id :number;
    name : string;
    // description:string;
    // startTime:any;
    // address:string;
}

class Organizer implements IInfo{
    id :number;
    name : string;
   constructor(id:number,name:string,){
      this.id = id;
      this.name = name;
     
   }
   display(){
    console.log(`ID is ${this.id } ,Name : ${this.name}`);
    
   }
}
var objOrganizer = new Organizer(123,"Rohit Patil");
objOrganizer.display();



interface IInfo2 {
    id :number;
    name : string;
     description:string;
     startTime:any;
    // address:string;
}

class Events implements IInfo2 {
    id :number;
    name : string;
    description:any;
    startTime:any;
   constructor(id:number,name:string,description:any,startTime:any){
      this.id = id;
      this.name = name;
      this.description = description;
      this.startTime = startTime;
     
   }
   display(){
    console.log(`ID is ${this.id } ,Name : ${this.name},Description:${this.description},Start Time:${this.startTime}`);
    
   }
}
var objEvents = new Events(123,"Rohit Patil"," Annual sport day of school","10am");
objEvents.display();


interface IInfo3 {
    id :number;
    name : string;
     description:string;
     startTime:any;
     address:string;
}

class Venue implements IInfo3 {
    id :number;
    name : string;
    description:any;
    startTime:any;
    address : any;
   constructor(id:number,name:string,description:any,startTime:any,address:any){
      this.id = id;
      this.name = name;
      this.description = description;
      this.startTime = startTime;
      this.address = address;
   }
   display(){
    console.log(`ID is ${this.id } ,Name : ${this.name},Description:${this.description}, Start Time:${this.startTime}  venue is:${this.address}`);
    
   }
}
var objVenue = new Venue(123,"Rohit Patil"," Annual sport day of school","10am","Balewadi Stedium Pune");
objVenue.display();


console.log("Practice of display()....");

class Girl{
   name:string;
   height:any;
   Weight:any;
   classes:string;
   RollNo:number;
   selected:boolean;
   constructor(name:string, height:any,Weight:any, classes:string,RollNo:number, selected:boolean){
      this.name = name;
      this.height = height;
      this.Weight = Weight;
      this.classes = classes;
      this.RollNo = RollNo;
      this.selected = selected;


   }
   display(){
      console.log(this.name+ " "+this.height +" "+this.Weight+" "+ this.classes+" "+this.RollNo+" "+this.selected)
      
   }
}
 var objGirls = new Girl("Richa","225cm","37kg","4c",15,true)
  // let girls : Girl[] = new Array(new Girl("Richa patil","225cm","37kg","4c",41 ,true))
