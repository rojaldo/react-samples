import { Component } from "react";
import { Hero } from "../../models/hero";
import HeroesListComponent from "./heroesListComponent";
import HeroForm from "./heroForm";

class HeroesComponent extends Component {
    state = {
        heroes: [new Hero('Batman', 'Bruce Wayne'), new Hero('Superman', "Clark Kent"), new Hero('Spiderman', "Peter Parker")],
    }

    componentWillUnmount() {
        console.log('HeroesComponent will unmount');
    }   

    addHero = (hero) => {
        this.setState({
            heroes: [...this.state.heroes, hero],
            newHero: new Hero()
        });
    }
    render() {


        return (
            <div className="container">
                <HeroForm onNewHero={(value)=>{this.addHero(value)}}></HeroForm>
                <hr />
                <HeroesListComponent heroes={this.state.heroes}></HeroesListComponent>

            </div>
        );
    }
}

export default HeroesComponent;