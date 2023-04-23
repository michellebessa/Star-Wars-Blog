import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AlertClick = () => {
  alert("Added to favorites!")
}

export const CardsCharacters = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.people.results &&
          store.people.results.map((character, index) => {
            return (
              <div className="cardscharacters col-sm-3 p-0 mb-2">
                <img
                  src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-0">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <p className="fw-bold text-white">Gender:<span className="fw-light"> {character.gender}</span></p>
                    <p className="fw-bold text-white">Hair color:<span className="fw-light"> {character.hair_color}</span></p>
                    <p className="fw-bold text-white">Eye-color:<span className="fw-light"> {character.eye_color}</span></p>
                  </p>
                </div>
                <div className="buttons d-flex justify-content-evenly">
                  <Link to={`/characters/${index}`}>
                    <button className="btnone btn-primary mt-auto">Learn more!</button>
                  </Link>
                  <button
                    className="btntwo"
                    onClick={() => actions.setFavorite(character.name)}
                  >
                    <i className="fas fa-heart" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

