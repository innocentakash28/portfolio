import React from "react";
import Navbar from "./Components/Navbar";
import WOW from "wowjs";
import { useEffect } from "react";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
