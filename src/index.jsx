import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import Home from "pages/Home/Home";
import Game from "pages/Game/Game";
import Header from "pages/components/Header/Header";
import ScrollUp from "pages/components/ScrollUp";
import Footer from "pages/components/Footer";

const App = () => {
  const [searchInput, setSearchInput] = useState();

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

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
        <ScrollUp />
        <Footer />
      </Container>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
