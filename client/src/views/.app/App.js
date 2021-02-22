import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/index";

class App extends React.Component {
  render() {
    return (
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Home} />
            </Switch>
          </Router>
        </main>
    );
  }
}

export default App;