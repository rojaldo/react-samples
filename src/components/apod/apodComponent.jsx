import { Component } from "react";

class ApodComponent extends Component {
    state = {
        apod: {}

    }

    getApod = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data
                });
            });
    }

    componentDidMount() {
        this.getApod();
    }
    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1 class="display-4">{this.state.apod.title}</h1>
                    <p class="lead">{this.state.apod.date}</p>
                    <div class="d-flex">
                    <img class="m-auto" src={this.state.apod.url} alt={this.state.apod.title} />    
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