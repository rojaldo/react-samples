import './Calculator.css';
import { Component } from 'react';

class Calculator extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    display: ''
  };

  handleClick = (value) => {
    let result = this.state.display + value;
    this.setState({ display: result });
  }

  render() {
    return (
      <table className="calculator" >
        <tbody>
          <tr>
            <td colSpan="3"> <input className="display-box" type="text" id="result" value={this.state.display} disabled /> </td>
          </tr>
          <tr>
            <td> <input className="button" type="button" value="1" onClick={() => { this.handleClick(1) }} /> </td>
            <td> <input className="button" type="button" value="2" onClick={() => { this.handleClick(2) }} /> </td>
            <td> <input className="button" type="button" value="3" onClick={() => { this.handleClick(3) }} /> </td>
            <td> <input className="button" type="button" value="/" onClick={() => { this.handleClick('/') }} /> </td>
          </tr>
          <tr>
            <td> <input className="button" type="button" value="4" onClick={() => { this.handleClick(4) }} /> </td>
            <td> <input className="button" type="button" value="5" onClick={() => { this.handleClick(5) }} /> </td>
            <td> <input className="button" type="button" value="6" onClick={() => { this.handleClick(6) }} /> </td>
            <td> <input className="button" type="button" value="-" onClick={() => { this.handleClick('-') }} /> </td>
          </tr>
          <tr>
            <td> <input className="button" type="button" value="7" onClick={() => { this.handleClick(7) }} /> </td>
            <td> <input className="button" type="button" value="8" onClick={() => { this.handleClick(8) }} /> </td>
            <td> <input className="button" type="button" value="9" onClick={() => { this.handleClick(9) }} /> </td>
            <td> <input className="button" type="button" value="+" onClick={() => { this.handleClick('+') }} /> </td>
          </tr>
          <tr>
            <td> <input className="button" type="button" value="." onClick={() => { this.handleClick('.') }} /> </td>
            <td> <input className="button" type="button" value="0" onClick={() => { this.handleClick(0) }} /> </td>
            <td> <input className="button" type="button" value="=" onClick={() => { this.handleClick('=') }} style={{ backgroundColor: '#fb0066' }} /> </td>
            <td> <input className="button" type="button" value="*" onClick={() => { this.handleClick('*') }} /> </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
