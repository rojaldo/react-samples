import { Component } from "react";

class HeroesComponent extends Component {
    state = {
        heroes: ['Batman', 'Superman', 'Spiderman'],
        newHeroName: ''
    }
    change = (event) => {
        this.setState({
            newHeroName: event.target.value
        });
    }
    addHero = () => {
        this.setState({
            heroes: [...this.state.heroes, this.state.newHeroName],
            newHeroName: ''
        });
    }
    render() {
        const listHeroes = this.state.heroes.map(
            (hero, index) => <li key={index} className="list-group-item">{hero}</li>)

        let myButton = <button className="btn btn-primary mt-2" onClick={this.addHero}>Add</button>;

        if(this.state.newHeroName === '') {
           myButton = <button className="btn btn-primary mt-2" onClick={this.addHero} disabled>Add</button>;
        }
        return (
            <div className="container">
                <div className="form-group">
                  <label>Hero Name</label>
                  <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={this.state.newHeroName} onChange={(event)=>this.change(event)}/>
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