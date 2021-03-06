import React from "react";
import axios from "axios";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

class MovieCard extends React.Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        axios
            .get(
                `https://www.omdbapi.com/?apikey=e49c5b8c&i=${
                    this.props.movieID
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Director,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <div className="movie-card-container">
                <div className="image-container">
                    <div
                        className="bg-image"
                        style={{ backgroundImage: `url(${Poster})` }}
                    />
                </div>
                <div className="movie-info">
                    <h1>{Title}</h1>
                    <div>
                        <small>Director(s): {Director} <br/>Released Date: {Released}</small>
                    </div>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre && Genre.split(', ').map(g => <span>{g}</span>)}
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <div className="btn-container">
                      <LikeButton/>
                      <DislikeButton/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
