import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function BeersFunctionalComponent() {

    const [beers, setBeers] = useState([])
    const [value, setValue] = useState([0, 6]);
    const [range, setRange] = useState([0, 30]);

    const getBeers = () => {
        let url = 'https://api.punkapi.com/v2/beers';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBeers(data);
                let max = 0;
                data.forEach(beer => {
                    if (beer.abv > max) {
                        max = beer.abv;
                    }
                });
                setRange([0, max]);
            });
    }

    useEffect(getBeers, []);

    let cards = beers
        .filter((beer) => {
            return beer.abv >= value[0] && beer.abv <= value[1];
        })
        .sort((a, b) => {
            return a.abv - b.abv;
        })
        .map((beer, index) => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                    <div className="card h-100">
                        <img className="card-img-top mx-auto mt-2" src={beer.image_url} alt="" style={{ width: '60px' }} />
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="container">
            <Box class="w-100">
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={range[1]}
                />
            </Box>
            <div className="row">
                {cards}
            </div>

        </div>
    );
}


export default BeersFunctionalComponent;