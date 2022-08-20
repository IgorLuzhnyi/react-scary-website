import { Component } from "react";
import { fav_movies_posters } from "../../constants/constants";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>My fav movies :3</h1>
          <div className="movies_container">
            {fav_movies_posters.map((movie) => (
              <img
                src={movie.imgPath}
                key={movie.keyNumber}
                className="movie_poster"
                alt="movie_poster"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
