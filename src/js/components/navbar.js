import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);

  useEffect(() => {}, [store]);

  return (
    <nav className="navbar sticky-top">
      <div>
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg"
            className="logo"
            alt=""
          ></img>
        </Link>
        <div className="dropdown">
          <button
            className="btn bg-white me-5 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites<span className="favoritescircle">{" "}{store.favorites.length} </span>       
          </button>
          <ul className="dropdown-menu">
            {store.favorites &&
              store.favorites.map((itemname) => {
                return (
                  <li>
                    <a className="dropdown-item" href="#">
                      {itemname}
                      <button className="thrash-icon" onClick={() => actions.deleteFavorite(itemname) }>
                        <i className="trash fas fa-trash"></i>
                      </button>
                    </a>
                  </li>
                );
              })}
            {store.favorites.length == 0 && <p className="none">None selected</p>}
          </ul>
        </div>
      </div>
      <span className="line-content"></span>
    <nav className="navbar navbar-expand-lg bg-black p-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-3 m-auto" id="menu">
            <li className="nav-item">
              <a className="nav-link text-white me-4" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-4" href="/characters">Characters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-4" href="/planets">Planets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/starships">Starships</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <span className="line-content"></span>
    </nav>
  );
};
