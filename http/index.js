const get = (url) => {
  return fetch(url);
};

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const use = (url) => {
  fetch(url)
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Error with http.use()');
      }
      // Parse the HTML content
      return response.text();
    })
    .then(htmlContent => {
      // Do something with the HTML content
      // console.log(htmlContent);
      document.querySelector('html').innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export { get, post, use };

export default {
  get,
  post,
  use
}
