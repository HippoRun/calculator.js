function addSomething(a,b,c) {
    if(a == "add"){
        return b+c;
    }
    else if(a == "subtract"){
        return b-c;
    }
    else if (a == "multiply"){
        return b*c;
    }
    else if (a == "divide"){
        return b/c;
    }
    else if (a == "remainder"){
        return b%c;
    }
    else if (a == "exp"){
        return Math.pow(b,c);
    }
    else{
        return "You did not enter a number";
    }
}
var operator = process.argv[2];
var numberA = Number.parseFloat(process.argv[3]);
var numberB = Number.parseFloat(process.argv[4]);

var result = addSomething(operator,numberA,numberB);
        

console.log(result);