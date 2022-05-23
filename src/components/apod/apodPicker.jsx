import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { AppContext } from "../../App";

function ApodPicker(props) {
    const context = useContext(AppContext);
    const [selectedDate, setSelectedDate] = useState(context.apod.date);
    const updateDate = (date) => {
        // get the date in the format YYYY-MM-DD
        context.apod.setDate(date);
        const dateString = moment(date).format('YYYY-MM-DD');
        setSelectedDate(date)
        props.onDateChange(dateString);
    }
    return (
        <DatePicker selected={selectedDate} onChange={(date) => updateDate(date)} />
    );
}

export default ApodPicker;

// import { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import moment from "moment";

// class ApodPicker extends Component {
//     state = {
//         selectedDate: new Date(),
//     }


//     updateDate = (date) => {
//         // get the date in the format YYYY-MM-DD
//         const dateString = moment(date).format('YYYY-MM-DD');
//         this.setState({
//             selectedDate: date
//         });
//         this.props.onDateChange(dateString);
//     }


//     render() {
//         return (
//             <DatePicker selected={this.state.selectedDate} onChange={(date) => this.updateDate(date)} />
//         );
//     }
// }

// export default ApodPicker;