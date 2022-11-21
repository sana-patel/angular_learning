// class Employee {
//     public firstName: string;
//     public lastName: string;
//     public designation: string;

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
 class Women {
   public firstName:string;
   public lastName:string;
   public role:string;

  public print():void {
      console.log("Women Details.");
      
  }
 }

 class Mother extends Women{
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print()
        console.log(`${this.firstName} ${this.lastName} is a ${this.role} of two children's.`);
        
    }
 }
 class daughter extends Women {
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} is a ${this.role} of her parents.`);
        
    }
    
 }

 class softwareDeveloper extends Women {
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} is a ${this.role} at Wipro compony .`);
        
    }
    
 }
 let Women1:Women[] = new Array(new daughter("Radha","Patil","daughter" ),new Mother("Radha","Patil","Mother"),new softwareDeveloper("Radha","Patil","softwareDeveloper"))
for ( var char of Women1 ) {
    char.print();

    
}
 
    
    