import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        let dataURL = "http://13.228.34.232/wp-json/wp/v2/movies?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movies: res
                })
            })
    }

    render() {
        let movies = this.state.movies.map((movie, index) => {
            return <div key={index}>
                    <img src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt='' />
                    <p><strong>Title:</strong> {movie.title.rendered}</p>
                    <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
                    <p><strong>Rating:</strong> {movie.acf.rating}</p>
                    <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
                </div>                
        });
        return (
        // <div className="App">
            // <header className="App-header">
            // <img src={logo} className="App-logo" alt="logo" />
            // <h1 className="App-title">Welcome to React</h1>
            // </header>
            // <p className="App-intro">
            // To get started, edit <code>src/App.js</code> and save to reload.
            // </p>
        // </div>
            <div>
                <h2>Star Wars Movies</h2>
                {movies}
            </div>
        );
    }
}

export default App;
