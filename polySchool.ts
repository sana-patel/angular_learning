console.log("============Assignment on Polymorphism======================================");
 class College {
   public firstName:string;
   public lastName:string;
   public role:string;

  public print():void {
      console.log("*****Person Details*******");
      
  }
 }

 class Principal extends College{
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print()
        console.log(`${this.firstName} ${this.lastName} is a ${this.role} Of  MIT College.`);
        
    }
 }
 class AssistantTeacher extends College {
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} is a ${this.role}  in MIT College.`);
        
    }
    
 }

 class Administrator extends College {
    constructor(firstName:string,lastName:string,role:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} is a ${this.role}  in MIT college .`);
        
    }
    
 }
 let college1:College[] = new Array(new Principal("Mrs.Renuka","Patil","Principal" ),new AssistantTeacher("Mr.Rohit","Patil","AssistantTeacher"),new Administrator("Mr.Akash","Sharma","Administrator"))
for ( var char of college1 ) {
    char.print();

    
}
 