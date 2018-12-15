const api = 'http://www.omdbapi.com/?apikey=720184ec';

const headers = {
  Accept: 'application/json'
};

// export const searchByName = (name, year) => {
//   fetch(`${api}&t=${name}&y=${year}`, {
//     method: 'GET',
//     headers: { ...headers }
//   })
//     .then(res => res.json())
//     .then(data => data.book);
// };

export const searchByName = (name, year, plot) => {
  return year
    ? fetch(`${api}&t=${name}&y=${year}&plot=${plot}`, { headers }).then(res =>
        res.json()
      )
    : fetch(`${api}&t=${name}&y=&plot=${plot}`, { headers }).then(res =>
        res.json()
      );
};

export const searchById = (id, plot) =>
  fetch(`${api}&i=${id}&plot=${plot}`, { headers }).then(res => res.json());
