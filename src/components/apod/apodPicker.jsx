import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

class ApodPicker extends Component {
    state = {
        selectedDate: new Date(),
    }


    updateDate = (date) => {
        // get the date in the format YYYY-MM-DD
        const dateString = moment(date).format('YYYY-MM-DD');
        this.setState({
            selectedDate: date
        });
        this.props.onDateChange(dateString);
    }


    render() {
        return (
            <DatePicker selected={this.state.selectedDate} onChange={(date) => this.updateDate(date)} />
        );
    }
}

export default ApodPicker;