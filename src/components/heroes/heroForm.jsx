import { Component } from "react";
import { Hero } from "../../models/hero";

class HeroForm extends Component {
    state = {
        newHero: new Hero(),
        valid: {
            name: true,
            alterEgo: true
        },
        pristine: true
    }

    change = (event) => {
        if(this.state.pristine){
            this.setState({
                pristine: false
            });
        }
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

    checkValid = () => {
        // regex for min 3 chars
        const regexName = /^[a-zA-ZñÑ]{3,}$/;
        const regexAlterEgo = /^[a-zA-ZñÑ]{0,}$/;
        this.setState({ valid: {name :regexName.test(this.state.newHero.name), alterEgo: regexAlterEgo.test(this.state.newHero.alterEgo)} });
    }



    addHero = () => {
        this.props.onNewHero(this.state.newHero);
        this.setState({
            newHero: new Hero()
        });
    }
    render() {
        let myButton = <button className="btn btn-primary mt-2" onClick={this.addHero} disabled={!(this.state.valid.name && this.state.valid.alterEgo) || this.state.pristine}>Add</button>;

        // if (this.state.newHeroName === '') {
        //     myButton = <button className="btn btn-primary mt-2" onClick={this.addHero} disabled>Add</button>;
        // }
        return (
            <>
                <div className="form-group">
                    <label>Hero Name</label>
                    <input type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="" value={this.state.newHero.name} onChange={(event) => this.change(event)} onBlur={() => this.checkValid()} />
                    <div class="alert alert-danger" role="alert" hidden={this.state.valid.name}>
                        <strong>Error in name: min 3 chars</strong>
                    </div>
                </div>
                <div className="form-group">
                    <label>Hero Alter Ego</label>
                    <input type="text" className="form-control" name="alterEgo" aria-describedby="helpId" placeholder="" value={this.state.newHero.alterEgo} onChange={(event) => this.change(event)} onBlur={() => this.checkValid()}/>
                    <div class="alert alert-danger" role="alert" hidden={this.state.valid.alterEgo}>
                        <strong>Error in name: min 3 chars</strong>
                    </div>
                </div>
                {myButton}
            </>
        );
    }
}

export default HeroForm;