import { Component } from "react";
import './App.css';
import Calculator from "./components/calculator/Calculator";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    state = {}
    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Calculator">
                    <Calculator></Calculator>
                </Tab>
                <Tab eventKey="profile" title="Heroes">
                    Heroes
                </Tab>
            </Tabs>
        );
    }
}

export default App;