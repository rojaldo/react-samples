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