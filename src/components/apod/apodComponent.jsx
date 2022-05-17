import { Component } from "react";
import ApodDisplay from "./apodDisplay";
import ApodPicker from "./apodPicker";


class ApodComponent extends Component {
    state = {
        date: '',

    }

    updateDate = (dateStr) => {
        this.setState({
            date: dateStr
        });
    }

    render() {

        return (
            <div className="container">
                <ApodPicker onDateChange={(dateStr => {this.updateDate(dateStr)})}></ApodPicker>
                <ApodDisplay dateStr={this.state.date}></ApodDisplay>
            </div>
        );
    }
}

export default ApodComponent;