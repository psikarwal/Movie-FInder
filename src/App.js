import React, { Component } from 'react';
import Home from './containers/Home';
import Search from './containers/Search';
import './containers/Home.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    recentSearches: []
  };

  addRecentSearch = url => {
    this.setState(state => ({
      ...state,
      recentSearches: [url, ...state.recentSearches]
    }));
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              searches={this.state.recentSearches}
              addRecentSearch={this.addRecentSearch}
            />
          )}
        />
        <Route exact path="/byName/:name/:plot" component={Search} />
        <Route exact path="/byName/:name/:plot/:year/" component={Search} />
        <Route exact path="/byIMDb/:id/:plot" component={Search} />
      </Switch>
    );
  }
}

export default App;
