import React, { Component } from 'react';
import { searchByName, searchById } from '../API/API';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';

class Search extends Component {
  state = {
    movie: '',
    error: true
  };
  componentDidMount() {
    console.log(6, this.props);
    const { match = {} } = this.props;
    if (match.params.name) {
      searchByName(
        match.params.name,
        match.params.year,
        match.params.plot
      ).then(res => {
        if (res.Error) this.setState({ error: res.Error });
        else {
          this.setState({ movie: res, error: false });
        }
      });
    }
    if (match.params.id) {
      searchById(match.params.id, match.params.plot).then(res => {
        if (res.Error) this.setState({ error: res.Error });
        else {
          this.setState({ movie: res, error: false });
        }
      });
    }
  }
  render() {
    console.log(31, this.state);
    const { movie = {} } = this.state;
    return (
      <div>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#636363'
          }}
        >
          <h2 style={{ marginLeft: '5%' }}>Go Back</h2>
        </Link>
        <div>
          {this.state.error ? (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: '#636363', marginTop: '10%' }}>
                Oops! {this.state.error}
              </h1>
            </div>
          ) : (
            <Movie movie={movie} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
