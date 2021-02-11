import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { Container } from "react-bootstrap";
import Home from "pages/Home/Home";
import Game from "pages/Game/Game";
import Header from "pages/components/Header/Header";

const App = () => {
  const [searchInput, setSearchInput] = useState();

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  return (
    <Router>
      <Container fluid>
        <Header handleSearchInput={handleSearchInput} />
        <Switch>
          <Route path="/" exact>
            <Home searchKeyword={searchInput} />
          </Route>
          <Route path="/games/:gameSlug">
            <Game />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
