import { useState, useEffect } from "react";

function BeersFunctionalComponent() {

    const [beers, setBeers] = useState([])

    const getBeers = () => {
        let url = 'https://api.punkapi.com/v2/beers';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBeers(data);
            });
    }

    useEffect(getBeers, []);


    let cards = beers.map(
        (beer, index) => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                    <div className="card h-100">
                        <img className="card-img-top mx-auto mt-2" src={beer.image_url} alt="" style={{width: '60px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{beer.name}</h4>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text">{beer.abv}%</p>
                        </div>
                    </div>
                </div>
            )
        }
    );
    return ( 
        <div className="container">
                
                <div className="row">
                  {cards}  
                </div>
                
            </div>
     );
}

export default BeersFunctionalComponent;