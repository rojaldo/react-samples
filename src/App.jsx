import { Component } from "react";
import Calculator from "./components/calculator/calculator";
import HeroesComponent from "./components/heroes/heroes";
import ApodComponent from "./components/apod/apodComponent";
import BeersFunctionalComponent from "./components/beers/beersFunctionalComponent";
import NoMatch from "./components/noMatch";
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {}
    render() {
        return (
            <>
                <h1>React Samples</h1>

                <nav>
                    <Link to="/calculator">Calculator</Link>{' | '}
                    <Link to="/heroes">Heroes</Link>{' | '}
                    <Link to="/apod">APOD</Link>{' | '}
                    <Link to="/beers">Beers</Link>
                </nav>

                <Routes>
                    <Route path="/">
                        <Route index element={<BeersFunctionalComponent />} />
                        <Route path="calculator" element={<Calculator />} />
                        <Route path="heroes" element={<HeroesComponent />} />
                        <Route path="apod" element={<ApodComponent />} />
                        <Route path="beers" element={<BeersFunctionalComponent />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </>

            // <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example" className="mb-3">
            //     <Tab eventKey="calculator" title="Calculator">
            //         <Calculator></Calculator>
            //     </Tab>
            //     <Tab eventKey="heroes" title="Heroes">
            //         <HeroesComponent></HeroesComponent>
            //     </Tab> 
            //     <Tab eventKey="apod" title="Apod">
            //         <ApodComponent></ApodComponent>
            //     </Tab>
            //     <Tab eventKey="beers" title="Beers">
            //         <BeersFunctionalComponent></BeersFunctionalComponent>
            //     </Tab>

            // </Tabs>
        );
    }
}

export default App;