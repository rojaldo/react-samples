import { Component } from "react";
import { Hero } from "../../models/hero";

class HeroesComponent extends Component {
    state = {
        heroes: [new Hero('Batman','Bruce Wayne'), new Hero('Superman',"Clark Kent"), new Hero('Spiderman', "Peter Parker")],
        newHero: new Hero(),
    }
    change = (event) => {
        if (event.target.name === 'name') {
            this.setState({
                newHero: new Hero(event.target.value, this.state.newHero.alterEgo)
            });
        } else if (event.target.name === 'alterEgo') {
            this.setState({
                newHero: new Hero(this.state.newHero.name, event.target.value)
            });
        }
    }
    addHero = () => {
        this.setState({
            heroes: [...this.state.heroes, this.state.newHero],
            newHero: new Hero()
        });
    }
    render() {
        const listHeroes = this.state.heroes.map(
            (hero, index) => <li key={index} className="list-group-item"> <b> {hero.name}</b> <br /> {hero.alterEgo}</li>)

        let myButton = <button className="btn btn-primary mt-2" onClick={this.addHero}>Add</button>;

        if (this.state.newHeroName === '') {
            myButton = <button className="btn btn-primary mt-2" onClick={this.addHero} disabled>Add</button>;
        }
        return (
            <div className="container">
                <div className="form-group">
                    <label>Hero Name</label>
                    <input type="text" className="form-control" name="name" id="" aria-describedby="helpId" placeholder="" value={this.state.newHero.name} onChange={(event) => this.change(event)} />
                </div>
                <div className="form-group">
                    <label>Hero Alter Ego</label>
                    <input type="text" className="form-control" name="alterEgo" id="" aria-describedby="helpId" placeholder="" value={this.state.newHero.alterEgo} onChange={(event) => this.change(event)} />
                </div>
                {myButton}
                <hr />
                <ul className="list-group">
                    {listHeroes}
                </ul>
            </div>
        );
    }
}

export default HeroesComponent;