import React, {Component} from 'react';
import data from "../../data";
import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    }

    changeCounter = (num) => {
        if(this.state.counter === data.length - 1 && num > 0) {
            this.setState({counter: 0});
        } else if(this.state.counter <= 0 && num < 0) {
            this.setState({counter: data.length - 1});
        } else {
            this.setState({counter: this.state.counter + num});
        }

    }

    render() {
        let movies = data[this.state.counter].favoriteMovies.map((val, i, arr) => {
            return <li>{val}</li>
        })

        return (
            <div>
                <main className="card-container">
                    <h1>{this.state.counter + 1}/{data.length}</h1>
                    <h1 className='person-name'>{data[this.state.counter].name.first} {data[this.state.counter].name.last}</h1>
                    <h1>From: {data[this.state.counter].city}, {data[this.state.counter].country}</h1>
                    <h1>Job Title: {data[this.state.counter].title}</h1>
                    <h1>Employer: {data[this.state.counter].employer}</h1>

                    <h1>Favorite Movies:</h1>
                    <ol className='ordered-list'>
                        {movies}
                    </ol>
                </main>

                <h2 
                    className='previous-button'
                    onClick={() => this.changeCounter(-1)}
                >{"<"} Previous </h2>
                <h2 
                    className='next-button'
                    onClick={() => this.changeCounter(1)}
                > Next > </h2>
            </div>
        )
    }
}

export default Card;