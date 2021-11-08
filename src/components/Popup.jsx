import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        <ul>
          <li>Actors: {selected.Actors}</li>
          <li>Awards: {selected.Awards}</li>
          <li>Revenue: {selected.BoxOffice}</li>
          <li>Genre: {selected.Genre}</li>
          <li>Language: {selected.Language}</li>
          <li>Length: {selected.Runtime}</li>
        </ul>

        <br />
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
