class Calculator {
    var num1 = 0;
    var num2 = 0;

    function constructor(x : number, y : number) {
        this.set(x, y);
    }

    function constructor(other : Calculator) {
        this.set(other);
    }

    function set(x : number, y : number) : void {
        this.num1 = x;
        this.num2 = y;
    }

    function getNum1() : number {
      return this.num1;
    }

    function getNum2() : number {
      return this.num2;
    }

    function set(other : Calculator) : void {
        this.set(other.num1, other.num2);
    }

    function sum() : number{
        return this.num1 + this.num2;
    }
}

class _Main {
    static function main(args : string[]) : void {
        var calc = new Calculator(5, 10);
        log("Calculator with values num1 : " + calc.getNum1() + " , num2 : " + calc.getNum2());
        log("Sum result: " + calc.sum());
    }
}
