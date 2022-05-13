import './Calculator.css';
import { Component } from 'react';
import {CalculatorEngine} from '../../models/calculator';
import Display from './display';
import Keyboard from './keyboard';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.calculatorEngine = new CalculatorEngine();
  }

  state = {
    display: '',
  };

  handleClick = (value) => {
    if(typeof value === 'number') {
      this.setState({
        display: this.calculatorEngine.handleNumber(value)
      });
    }else if(typeof value === 'string') {
      this.setState({
        display: this.calculatorEngine.handleSymbol(value)
      });
    }

  }

  render() {
    return (
      <table className="calculator" >
        <tbody>
          <Display message={this.state.display}></Display> 
          <Keyboard onSignal={(value)=>this.handleClick(value)}></Keyboard>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
