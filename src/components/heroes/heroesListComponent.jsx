import { Component } from "react";

class HeroesListComponent extends Component {
    state = {
       
    }
    render() {
        const listHeroes = this.props.heroes.map(
            (hero, index) => <li key={index} className="list-group-item"> <b> {hero.name}</b> <br /> {hero.alterEgo}</li>)
        return (
            <ul className="list-group">
                {listHeroes}
            </ul>
        );
    }
}

export default HeroesListComponent;