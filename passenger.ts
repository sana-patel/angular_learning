class Passenger {
    firstName:string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    display(){
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentFlyerno);

    }
}

var passenger2 = new Passenger("Harry", "potter", 202);
passenger2.display();
//console.log(passenger.firstName + " " + passenger.lastName + " "+ passenger.frequentFlyerno);

for (const item in pa) {
}