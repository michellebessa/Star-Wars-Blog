import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardsStarships = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.starships.results &&
          store.starships.results.map((starship, index) => {
            return (
                <div className="cardscharacters col col-lg-3 p-0 mb-2">
                  <img
                    src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body p-0">
                    <h5 className="card-title">{starship.name}</h5>
                    <p className="card-text">
                      <p className="fw-bold text-white">Length: <span className="fw-light"> {starship.length}</span></p>
                      <p className="fw-bold text-white">Crew: <span className="fw-light"> {starship.crew}</span></p>
                      <p className="fw-bold text-white">Passengers: <span className="fw-light"> {starship.passengers}</span></p>
                    </p>
                  </div>
                  <div className="buttons d-flex justify-content-evenly">
                    <Link to={`/starships/${index}`}>
                      <button className="btnone btn-primary">Learn more!</button>
                    </Link>
                    <button
                      className="btntwo"
                      onClick={() => actions.setFavorite(starship.name)}
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

