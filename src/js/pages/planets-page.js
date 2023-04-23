import React from "react";
import { CardsPlanets } from "../components/cards-planets";

export const PlanetsPage = () => {
    return (
        <div className="bg-black">
            <span className="line-content"></span>
            <h1 className="text-white text-center">Planets</h1>
            <span className="line-content"></span>
            <CardsPlanets />
        </div>
    );
};