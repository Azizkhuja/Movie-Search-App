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
          {/* <p>{selected.Plot}</p> */}
          <ul className="plot__list">
            <li>
              <span>Actors:</span> {selected.Actors}
            </li>
            <li>
              <span>Awards:</span> {selected.Awards}
            </li>
            <li>
              <span>Revenue:</span> {selected.BoxOffice}
            </li>
            <li>
              <span>Genre:</span> {selected.Genre}
            </li>
            <li>
              <span>Language:</span> {selected.Language}
            </li>
            <li>
              <span>Length:</span> {selected.Runtime}
            </li>
          </ul>
        </div>

        <br />
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
