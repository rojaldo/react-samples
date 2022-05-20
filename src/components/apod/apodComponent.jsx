import { useState } from "react";
import ApodDisplay from "./apodDisplay";
import ApodPicker from "./apodPicker";

function ApodComponent() {
    const [date, setDate] = useState('');
    const updateDate = (dateStr) => {
        console.log('dateStr*: ' + dateStr);
        setDate(dateStr);
    }

    return (
        <div className="container">
            <ApodPicker onDateChange={(dateStr => { updateDate(dateStr) })}></ApodPicker>
            <ApodDisplay dateString={date}></ApodDisplay>
        </div>
    )
}
export default ApodComponent;

// import { Component } from "react";
// import ApodDisplay from "./apodDisplay";
// import ApodPicker from "./apodPicker";


// class ApodComponent extends Component {
//     state = {
//         date: '',
//     }

//     updateDate = (dateStr) => {
//         this.setState({
//             date: dateStr
//         });
//     }

//     render() {

//         return (
//             <div className="container">
//                 <ApodPicker onDateChange={(dateStr => {this.updateDate(dateStr)})}></ApodPicker>
//                 <ApodDisplay dateStr={this.state.date}></ApodDisplay>
//             </div>
//         );
//     }
// }

// export default ApodComponent;