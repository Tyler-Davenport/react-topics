const endpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart";

const getJokes = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

  export default getJokes
  