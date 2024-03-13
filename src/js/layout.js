import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Planetas from "./views/planetas";
import Characters from "./views/characters";
import Pelis from "./views/pelis";
import Vehiculos from "./views/vehiculos";
import Naves from "./views/naves.js";
import Detail from "./views/detail";
import injectContext from "./store/appContext";
import Login from "./views/PaginaInicio.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Planetas />} path="/planetas" />
            <Route element={<Characters />} path="/people" />
            <Route element={<Pelis />} path="/pelis" />
            <Route element={<Vehiculos />} path="/vehiculos" />
            <Route element={<Naves />} path="/naves" />
            <Route element={<Detail />} path="/:element/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);