import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Comics: [
    {
      name: "Avengers Assemble",
      rating: "IMDB: 8.0/10",
      link: "https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_1"
    },
    {
      name: "Zack Snyder's Justice League",
      rating: "IMDB: 8.1/10",
      link: "https://www.imdb.com/title/tt12361974/?ref_=nv_sr_srsg_0"
    },
    {
      name: "Logan",
      rating: "IMDB 8.1/10",
      link: "https://www.imdb.com/title/tt3315342/?ref_=nv_sr_srsg_7"
    }
  ],

  Drama: [
    {
      name: "The Revenant",
      rating: "IMDB: 8.0/10",
      link: "https://www.imdb.com/title/tt1663202/?ref_=nv_sr_srsg_0"
    },
    {
      name: "The Shawshank Redemption",
      rating: "IMDB: 9.3/10",
      link: "https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt"
    },
    {
      name: "The Godfather",
      rating: "IMDB: 9.2/10",
      link: "https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt"
    }
  ],
  Horror: [
    {
      name: "Psycho",
      rating: "IMDB: 8.5/10",
      link: "https://www.imdb.com/title/tt0054215/?ref_=adv_li_tt"
    },
    {
      name: "The Shining",
      rating: "IMDB: 8.4/10",
      link: "https://www.imdb.com/title/tt0081505/?ref_=adv_li_tt"
    },
    {
      name: "Alien",
      rating: "IMDB: 8.4/10",
      link: "https://www.imdb.com/title/tt0078748/?ref_=adv_li_tt"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Comics");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movie Rating </h1>
      <p style={{ fontSize: "large" }}>
        Checkout imdb rating of top movies based on their genre.
      </p>
      <p style={{ fontSize: "medium" }}> Choose a genre.</p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button id="list-movie" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ color: "red" }} />
      <div style={{ textAlign: "left" }}>
        <h3 id="imdb-desc"> Click on the title for more details</h3>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li key={movie.name} id="list-movie-rating">
              <a href={movie.link}>
                <div style={{ fontSize: "x-large", cursor: "pointer" }}>
                  {" "}
                  {movie.name}{" "}
                </div>
              </a>
              <div style={{ fontSize: "medium" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
