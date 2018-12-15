import React from 'react';

const Movie = props => {
  const { movie = {} } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '5%',
        marginLeft: '10%'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            width: '280px',
            height: '350px',
            backgroundSize: 'cover',
            backgroundImage: `url(${movie.Poster})`
          }}
        />
        <div
          style={{ maxWidth: '90%', marginLeft: '5%', textAlign: 'justify' }}
        >
          <h1 style={{ color: '#636363' }}>{movie.Title}</h1>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Year:</div>
            <div> {movie.Year}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>IMDb: </div>
            <div> {movie.imdbRating}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Actors: </div>
            <div> {movie.Actors}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Director: </div>
            <div> {movie.Director}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Language: </div>
            <div> {movie.Language}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Writer: </div>
            <div> {movie.Writer}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Genre: </div>
            <div> {movie.Genre}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Runtime: </div>
            <div> {movie.Runtime}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>
              Production:
            </div>
            <div> {movie.Production}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: 'bold', marginRight: 5 }}>Country:</div>
            <div> {movie.Country}</div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ color: '#636363' }}>Description:</h3>
        <div style={{ textAlign: 'justify', maxWidth: '90%' }}>
          {movie.Plot}
        </div>
      </div>
    </div>
  );
};

export default Movie;
