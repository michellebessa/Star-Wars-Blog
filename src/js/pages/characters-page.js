import React from "react";
import { CardsCharacters } from "../components/cards-characters";
export const CharactersPage = () => {
  return (
    <div className="bg-black">
      <span className="line-content"></span>
      <h1 className="text-white text-center" id="home-title">Characters</h1>
      <span className="line-content"></span>
      <CardsCharacters />
    </div>
  );
};
