import { useState, useEffect, useContext } from "react";
import ListBeers from "./listBeers";
import SliderBeers from "./sliderBeers";
import { AppContext } from "../../App";

function BeersFunctionalComponent() {

    const context = useContext(AppContext);
    const [beers, setBeers] = useState(context.beers.beers);
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [value, setValue] = useState(context.beers.range);
    const [range, setRange] = useState([0, 30]);
    const [status, setStatus] = useState('idle');

    const getBeers = () => {
        if (status !== 'idle' || context.beers.beers.length > 0) return;
        setStatus('fetching');
        let url = 'https://api.punkapi.com/v2/beers';
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBeers(data);
                context.beers.setBeers(data);
                setFilteredBeers(
                    data
                    .filter((beer) => {
                        return beer.abv >= value[0] && beer.abv <= value[1];
                    })
                    .sort((a, b) => {
                        return a.abv - b.abv;
                    })
                );
                let max = 0;
                data.forEach(beer => {
                    if (beer.abv > max) {
                        max = beer.abv;
                    }
                });
                setRange([0, max]);
                setStatus('fetched');
            });
    }

    const filterBeers = (myBeers = []) => {
        if (myBeers.length === 0) myBeers = beers;
        setFilteredBeers(myBeers
            .filter(beer => {
                return beer.abv >= value[0] && beer.abv <= value[1];
            })
            .sort((a, b) => {
                return a.abv - b.abv;
            })
        );
    }

    useEffect(getBeers, []);

    const updateValue = (newValue) => {
        setValue(newValue);
        filterBeers();
    }

    return (
        <div className="container">
            <h1>My Beers</h1>

            <SliderBeers range={range} onChangeValue={(value) => { updateValue(value) }}></SliderBeers>
            <ListBeers beers={filteredBeers}></ListBeers>

        </div>
    );
}


export default BeersFunctionalComponent;