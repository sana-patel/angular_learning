function doubleMe (x:number);//declaration
function doubleMe(x:string);
function doubleMe(arr:string[])

function doubleMe(x:any){  //fun implimantaion
   //checking input parameteras num or string
   if(x && typeof x === "number") 
   {
    console.log(x*2);
    
   }
   else if (x && typeof x === "string")
   {
    console.log(x + " "+x);
    
   }
   else if(Array.isArray(x)){
    return x.map(name=> console.log(name + " "+name)
    )
   }
}
doubleMe(2)
doubleMe("Jhon") //calling fun
doubleMe(["codemind","technology"])




var product = function (...nums) 
{

    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

var product = function (...nums) 
{
    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

var hello = (name:string):string=> {
    return "Hello" + name;
};


console.log(hello("AngularBatch4"));

var multiply = (num1:number, num2:number):number=> {
    return num1 * num2;
}

console.log(multiply(2,7));
