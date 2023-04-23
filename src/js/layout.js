import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CharactersPage } from "./pages/characters-page";
import { PlanetsPage } from "./pages/planets-page";
import { StarshipsPage } from "./pages/starships-page";
import { Characters } from "./pages/characters";
import { Planets } from "./pages/planets";
import { Starships } from "./pages/starships";
import injectContext from "./store/appContext";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CharactersPage />} path="/characters" />
            <Route element={<PlanetsPage />} path="/planets" />
            <Route element={<StarshipsPage />} path="/starships" />
            <Route element={<Characters />} path="/characters/:theid" />
            <Route element={<Planets />} path="/planets/:theid" />
            <Route element={<Starships />} path="/starships/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
