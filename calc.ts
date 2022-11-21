
export class Calculator {

    add(x:number, y: number) : number {
       return x + y;
   }
   
    sub(x: number, y: number) : number {
       return x - y ;
   }
   
}

export class Calculator2{
   static pi = 3.14
   area(pi,radius:number){
    return  pi*radius*radius
   }
}


// function add( x:number,y:number){
//     return x+y
// }

// function sub( x:number,y:number){
//     return x-y
// }
// export{add,sub}