import { Component } from "react";
import { Hero } from "../../models/hero";

class HeroForm extends Component {
    state = {
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
        this.props.onNewHero(this.state.newHero);
        this.setState({
            newHero: new Hero()
        });
    }
    render() {
        let myButton = <button className="btn btn-primary mt-2" onClick={this.addHero}>Add</button>;

        if (this.state.newHeroName === '') {
            myButton = <button className="btn btn-primary mt-2" onClick={this.addHero} disabled>Add</button>;
        }
        return (
            <>
                <div className="form-group">
                    <label>Hero Name</label>
                    <input type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="" value={this.state.newHero.name} onChange={(event) => this.change(event)} />
                </div>
                <div className="form-group">
                    <label>Hero Alter Ego</label>
                    <input type="text" className="form-control" name="alterEgo" aria-describedby="helpId" placeholder="" value={this.state.newHero.alterEgo} onChange={(event) => this.change(event)} />
                </div>
                {myButton}
            </>
        );
    }
}

export default HeroForm;