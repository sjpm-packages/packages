# 💻 HTTP

```js
//Import the HTTP package

import http from 'http';

//or

import { get, post, use } from 'http';
 
```

# GET

Create a GET request then use `.then` like normal.
```js
http.get('<example.com/get>')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})
.then(textData => {
  console.log(textData); // This will log the text data fetched from the URL
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
}); 
```

# POST

Create a POST request then use `.then` like normal.

```js
http.post('<example.com/post>')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data); // This will log the text data fetched from the URL
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
}); 
```

# Use

Display content from a file on your page.

```js
http.use('/yourfile')
```
