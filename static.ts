class calculator {
    add(num1:number,num2:number):number{
        return num1+num2
    }

    sub(num1:number,num2:number):number{
        return num1-num2
    }

    multiply(num1:number,num2:number):number{
        return num1*num2
    }

    div(num1:number,num2:number):number{
        return num1%num2
    }
   public display():void{
        console.log(calculator.add(20,10),super.sub(20,10),super.multiply(20,10),super.div(20,10));
}

}

var obj = new calculator(20,10);
obj.display()