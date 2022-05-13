const INIT = 0;
const FIRSTFIGURE = 1;
const SECONDFIGURE = 2;
const RESULT = 3;

export class CalculatorEngine {

    currentState = INIT;
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
    result = 0;

    display = '';

    handleNumber = (number) => {
        switch (this.currentState) {
          case INIT:
            this.firstNumber = number;
            this.currentState = FIRSTFIGURE;
            this.display = number;
            break;
          case FIRSTFIGURE:
            this.firstNumber = this.firstNumber * 10 + number;
            this.display = this.firstNumber;
            break;
          case SECONDFIGURE:
            this.secondNumber = this.secondNumber * 10 + number;
            this.display = this.display + number;
            break;
          case RESULT:
            this.firstNumber = number;
            this.secondNumber = 0;
            this.operator = '';
            this.result = 0;
            this.currentState = FIRSTFIGURE;  
            this.display = number;
            break;
          default:
            break;
        }
        return this.display;
      }
    
      resolve = () => {
        switch (this.operator) {
          case '+':
            return this.firstNumber + this.secondNumber;
          case '-':
            return this.firstNumber - this.secondNumber;
          case '*':
            return this.firstNumber * this.secondNumber;
          case '/':
            return this.firstNumber / this.secondNumber;
          default:
            break;
        }
      }
    
      handleSymbol = (symbol) => {
        switch (this.currentState) {
          case INIT:
            break;
          case FIRSTFIGURE:
            if(symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
              this.operator = symbol;
              this.currentState = SECONDFIGURE;
              this.display = this.display + symbol;
            }
            break;
          case SECONDFIGURE:
            if(symbol === '=') {
              this.result = this.resolve();
              this.currentState = RESULT;
              this.display = this.display + '=' + this.result;
            }
            break;
          case RESULT:
            if(symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
              this.firstNumber = this.result;
              this.secondNumber = 0;
              this.result = 0;
              this.operator = symbol;
              this.currentState = SECONDFIGURE;
              this.display = this.firstNumber + symbol;
            }
            break;
          default:
            break;
        }
        return this.display;
      }
    

}