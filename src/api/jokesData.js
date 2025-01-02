export default async function getJokes() {
    return fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart')
      .then((res) => res.json())
      .then((data) => ({
        setup: data.setup || data.joke,
        delivery: data.delivery || '',
      }));
  }
