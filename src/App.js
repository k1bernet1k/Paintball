import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom"
import './App.css';
import Page from "./components/Page";
import Home from "./components/Home";
import Header from "./components/Header";
import Zones from "./components/Zones";
import Prices from "./components/Prices";


class App extends React.Component {
  render() {
    return(
        <BrowserRouter>
            <div className="App">
              <Header/>
              <main>
                <Switch>
                  <Route path="/" exact>
                    <Home title ="Main Page"/>
                  </Route>
                  <Route path="/book">
                    <Page title ="Book now"/>
                  </Route>
                  <Route path="/zones">
                    <Page title ="Zones"/>
                    <Zones/>
                  </Route>
                  <Route path="/prices">
                    <Page title ="Prices"/>
                    <Prices/>
                  </Route>
                  <Route path="/contacts">
                    <Page title ="Contacts"/>
                  </Route>
                </Switch>
              </main>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
