import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class ApodComponent extends Component {
    state = {
        apod: {},
        selectedDate: new Date(),
    }

    getApod = (dateString = '') => {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        if(dateString !== '') {
            url = url + '&date=' + dateString;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data
                });
            });
    }

    updateDate = (date) => {
        // get the date in the format YYYY-MM-DD
        const dateString = moment(date).format('YYYY-MM-DD');
        console.log(dateString);
        this.setState({
            selectedDate: date
        });
        this.getApod(dateString);
    }

    componentDidMount() {
        this.getApod();
    }
    render() {
        let media = <img class="m-auto" src={this.state.apod.url} alt={this.state.apod.title} />;
        if(this.state.apod.media_type === 'video') {
            media = <iframe width="560" className="mx-auto" height="315" src={this.state.apod.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        return (
            <div class="container">
                <DatePicker selected={this.state.selectedDate} onChange={(date) => this.updateDate(date)} />
                <div class="jumbotron">
                    <h1 class="display-4">{this.state.apod.title}</h1>
                    <p class="lead">{this.state.apod.date}</p>
                    <div class="d-flex">
                    {media}    
                    </div>
                    <hr class="my-2"/>
                        <p>{this.state.apod.explanation}</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href={this.state.apod.hdurl} role="button">HD Image</a>
                        </p>
                </div>
            </div>
        );
    }
}

export default ApodComponent;