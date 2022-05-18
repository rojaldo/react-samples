import { Component } from "react";
import './App.css';
import Calculator from "./components/calculator/calculator";
import HeroesComponent from "./components/heroes/heroes";
import ApodComponent from "./components/apod/apodComponent";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import BeersFunctionalComponent from "./components/beers/beersFunctionalComponent";
class App extends Component {

    state = {}
    render() {
        return (
            <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="calculator" title="Calculator">
                    <Calculator></Calculator>
                </Tab>
                <Tab eventKey="heroes" title="Heroes">
                    <HeroesComponent></HeroesComponent>
                </Tab> 
                <Tab eventKey="apod" title="Apod">
                    <ApodComponent></ApodComponent>
                </Tab>
                <Tab eventKey="beers" title="Beers">
                    <BeersFunctionalComponent></BeersFunctionalComponent>
                </Tab>
                
            </Tabs>
        );
    }
}

export default App;