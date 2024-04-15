/**
* Get the editing and revision statistics of the given wikipedia page
* @param {string} title - the exact title of the wikipedia page
* @param {string} progressBarId - the id of the progress bar html element
*/
export const getEditStats = async (title, ids) => {
  
  const urlAnon = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${title}/history/counts/anonymous`;
  const urlBot = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${title}/history/counts/bot`;
  const urlMinor = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${title}/history/counts/minor`;
  const urlReverted = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${title}/history/counts/reverted`;

  const headers = {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwYjU4NjU1YmJiZTJiMzgxMTQxNTlkMzQ3NjllY2RkNSIsImp0aSI6IjYzOTRkZTA4ZWViMTVkNjk1MTg5YTcyNDY3N2RkZGM0ZDhkNGZjMzViNjFmMTJkMTUxYTlkOGVkNTExMDA3NzJlOTg5YWI1ODQxMmQ4ZjU2IiwiaWF0IjoxNzEyNDMxMzMxLjM0ODQ5NSwibmJmIjoxNzEyNDMxMzMxLjM0ODQ5OSwiZXhwIjozMzI2OTM0MDEzMS4zNDcyODYsInN1YiI6IjY5ODEzMjI4IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.Q79YcYovd0y3CDIhMUcSn39KJ6pP8VHICKqwMYIwA5hv_kEmlniKNHMuL429ssF1Bl0sepF7zo95TRSoyOAE3eZ8PEb0BgdC2YXo2pwsRQ9QeeInZR4f7EsJY4puknfO6rmGLDeF4alqIkMgoakV6GjTJ9Kz8t3eLE4Y09coEQYptj8AOJFo_hvG644pXdTutHXs2b9EOX92oo-i02z1oRs_-8IiREtXEhAvgugIorIrDNMtUIW6SXhpPoygL721GMRDGbNbtJ7jwWJOckwKIRhJYAzb83-fCb1qMQFGP3WTptRLLqPEERoPPPwapSVeGCw7JfHN2sCV1yygXIrwsYeSu20RHhkXRmZ9rBRUyTXFkZUXczKY57VQoMj4GWogQ7y_d9AvKG6O35v_gmpgeqmOZMxV1ygDGG6tP_RDEMtl_TrGATsdeiXi6eam4SoxzX0qMKL5XsTYN9MSJ8pShbfBtwlTNyqJxHqN44iffC7G7EQ9C71QmZZC9OQxQF7j0QIfgrfdJalTdHCIUccVD7vqJ_PHWvGt1s6GjX4s31YlSBxqG1q3CnYCkhRGaxp-ZarxlRzjxGdoWqKxYGIyccuYWhj9YmwgPDNtSXt0yWI-hK0zq5z8NTCLY0INz8ucoX2TmC4vGO3zlRud3qmZQFgPcVqlEAlMAMVXNgo-c2U',
      'Api-User-Agent': 'wikistats (1junkt3st1@protonmail.com)'
    }
  };

  let responseAnon = await fetch(urlAnon, headers);
  const jsonAnon = await responseAnon.json();

  // TODO: Implement setting the loading bar progress
  if (ids && ids[0]) {
    const column = document.getElementById(ids[0]);
  }

  let responseBot = await fetch(urlAnon, headers);
  const jsonBot = await responseBot.json();

  let responseMinor = await fetch(urlAnon, headers);
  const jsonMinor = await responseMinor.json();

  let responseReverted = await fetch(urlAnon, headers);
  const jsonReverted = await responseReverted.json();
}
