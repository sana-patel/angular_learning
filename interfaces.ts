
console.log("creating interface============");

interface Iproduct {
    id:number;
    name:string;
    description?:string //?for optional
    price:number //declaration only in interface.
    display():void; //void meaning nothing return

}

var objproduct: Iproduct = {
    id:123,
    name:"Iphone",
    description:"It's awesome",
    price: 60000 ,// implimantation for iproduct interface
    display():void{
        console.log(this.id+" "+this.name);
        
        
    }
}

var objproduct1: Iproduct = {
    id:456,
    name:"android",
    description:"It's good to use",
    price: 20000 ,// implimantation for iproduct interface
    display():void{
        console.log(this.id+" "+this.name);
        
        
    }
}



 console.log('Assignment============interface');

 interface IStudentInfo {
    rollNumber: number;
    name:string;
    class:any;
    email:any;
    marks:number;
    isApplicableRound2:boolean,

 }
 
 var objStudent:IStudentInfo ={
  rollNumber:1,
  name: "Rohit Patil",
  class: "BE.IIC",
  email:"abc@gmail.com",
  marks:513,
  isApplicableRound2: true,
    
 }