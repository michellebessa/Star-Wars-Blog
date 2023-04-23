import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardsPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.planets.results &&
          store.planets.results.map((planet, index) => {
            return (
              <div className="cardscharacters col-sm-3 p-0 mb-2">
                <img
                  src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-0">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">
                    <p className="fw-bold text-white">Population: <span className="fw-light"> {planet.population}</span></p>
                    <p className="fw-bold text-white">Terrain:<span className="fw-light"> {planet.terrain}</span></p>
                  </p>
                </div>
                <div className="buttons d-flex justify-content-evenly">
                  <Link to={`/planets/${index}`}>
                    <button className="btnone btn-primary">Learn more!</button>
                  </Link>
                  <button
                    className="btntwo"
                    onClick={() => actions.setFavorite(planet.name)}
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
