import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// From Components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";

// From Pages
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        {/* maksud dari exact adalah agar component homepage hanya akan dirender ketika berada pada route atau path "/" */}
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
