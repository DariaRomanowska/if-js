fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} -${response.statusText} `);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
