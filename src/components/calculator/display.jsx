import { Component } from "react";

class Display extends Component {

    state = {}
    render() {
        return (
            <tr>
                <td colSpan="3">
                    <input className="display-box" type="text" id="result" value={this.props.message} disabled />
                </td>
            </tr>);
    }
}

export default Display;