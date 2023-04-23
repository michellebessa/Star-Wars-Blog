import React from "react";
import { CardsStarships } from "../components/cards-starships";

export const StarshipsPage = () => {
    return (
        <div className="bg-black">
            <span className="line-content"></span>
            <h1 className="text-white text-center">Starships</h1>
            <span className="line-content"></span>
            <CardsStarships />
        </div>
    );
};