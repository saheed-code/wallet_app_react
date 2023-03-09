class StateMgt{
    constructor(){
        this.count = 0
    }

    setCount(counter, operator){
        if(operator === "*"){
            return this.count *= counter
        }else if(operator === "+"){
            return this.count += counter
        }else if(operator === "-"){
            return this.count -= counter
        }

    }

    handleIncrement(){
        return this.count +=1
    }

    handleDecrement(){
        return this.count -= 1
    }

    handleReset(){
       return this.count = 0
    }

}

const stateMgter = new StateMgt();

console.log(stateMgter.setCount(4, "+"));
console.log(stateMgter.setCount(2, "*"));
console.log(stateMgter.setCount(5, "-"));
console.log(stateMgter.handleIncrement());
console.log(stateMgter.handleIncrement());
console.log(stateMgter.handleDecrement());
console.log(stateMgter.handleReset());
   
function printToConsole(array1) {
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    console.log(sumWithInitial);
}
   
const array1 = [1, 2, 3, 4];
printToConsole(array1);

