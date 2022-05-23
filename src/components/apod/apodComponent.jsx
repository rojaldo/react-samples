import { useState, useContext } from "react";
import ApodDisplay from "./apodDisplay";
import ApodPicker from "./apodPicker";
import moment from "moment";
import { AppContext } from "../../App";

function ApodComponent() {
    const context = useContext(AppContext);
    const [date, setDate] = useState(moment(context.apod.date).format("YYYY-MM-DD"));
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