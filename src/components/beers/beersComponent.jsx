import { Component } from "react";

class BeersComponent extends Component {
    state = { 
        beers: []
     } 

    getBeers = () => {
        let url = 'https://api.punkapi.com/v2/beers';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    beers: data
                });
            });
    }

    componentDidMount(){
        this.getBeers();
    }
    render() { 
        let cards = this.state.beers.map(
            (beer, index) => {
                return (
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div class="card h-100">
                            <img class="card-img-top mx-auto mt-2" src={beer.image_url} alt="" style={{width: '60px'}}/>
                            <div class="card-body">
                                <h4 class="card-title">{beer.name}</h4>
                                <p class="card-text">{beer.tagline}</p>
                                <p class="card-text">{beer.abv}%</p>
                            </div>
                        </div>
                    </div>
                )
            }
        );
        return (
            <div class="container">
                
                <div class="row">
                  {cards}  
                </div>
                
            </div>
        );
    }
}
 
export default BeersComponent;