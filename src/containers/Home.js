import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Links from '../components/Links';

class Home extends Component {
  state = {
    name: '',
    year: '',
    plot1: 'short',
    imdbId: '',
    plot2: 'full'
  };

  onChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(6, event.target.id);
    // this.props.add
    if (event.target.id === '1') {
      const url = `/byName/${this.state.name}/${this.state.plot1}/${
        this.state.year
      }`;
      this.props.addRecentSearch(url);
      this.props.history.push(url);
    }

    if (event.target.id === '2') {
      const url = `/byIMDb/${this.state.imdbId}/${this.state.plot2}`;
      this.props.addRecentSearch(url);
      this.props.history.push(url);
    }
  };

  render() {
    const searches = this.props.searches;
    console.log(6, searches);

    return (
      <div
        id="masterDiv"
        style={{ marginTop: '10%', padding: '2% 8%', background: '#cfcfcf' }}
      >
        <form id="1" onSubmit={this.handleSubmit}>
          <h1 style={{ color: '#636363' }}>Search By Name</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange('name')}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.onChange('year')}
              placeholder="Year"
            />
            <select
              value={this.state.plot1}
              name="plot1"
              onChange={this.onChange('plot1')}
            >
              <option value="short">Short</option>
              <option value="full">Full</option>
            </select>
          </div>

          <div style={{ textAlign: 'center' }}>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <form id="2" onSubmit={this.handleSubmit}>
          <h1 style={{ color: '#636363' }}>Search By IMDb Id</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* <input type="text" name="firstname" placeholder="Name" /> */}
            <input
              type="text"
              name="imdbId"
              placeholder="ID"
              value={this.state.imdbId}
              onChange={this.onChange('imdbId')}
              required
            />
            <select
              value={this.state.plot2}
              name="plot"
              onChange={this.onChange('plot2')}
            >
              <option value="short">Short</option>
              <option value="full">Full</option>
            </select>
          </div>

          <div style={{ textAlign: 'center' }}>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <div>
          <h1 style={{ color: '#636363' }}>Recent Searches</h1>
          {searches.slice(0, 5).map(link => (
            <Links key={link} link={link} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
