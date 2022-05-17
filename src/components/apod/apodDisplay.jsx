import { Component } from "react";

class ApodDisplay extends Component {
    state = { 
        apod: {}
     } 

    getApod = () => {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
        if(this.props.dateStr !== '' || this.props.dateStr !== undefined) {
            url = url + '&date=' + this.props.dateStr;
        }
        fetch(url)
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

    componentDidUpdate(prevProps) {
        console.log(this.props.dateStr);
        if(this.props.dateStr !== prevProps.dateStr) {
            this.getApod();
        }
    }


    render() { 
        let media = <img className="m-auto" src={this.state.apod.url} alt={this.state.apod.title} />;
        if(this.state.apod.media_type === 'video') {
            media = <iframe width="560" className="mx-auto" height="315" src={this.state.apod.url} title={this.state.apod.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        return (
            <div className="jumbotron">
            <h1 className="display-4">{this.state.apod.title}</h1>
            <p className="lead">{this.state.apod.date}</p>
            <div className="d-flex">
            {media}    
            </div>
            <hr className="my-2"/>
                <p>{this.state.apod.explanation}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href={this.state.apod.hdurl} role="button">HD Image</a>
                </p>
        </div>
        );
    }
}
 
export default ApodDisplay;