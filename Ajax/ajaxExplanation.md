### Extracting data from JSON to display

> This project contains an API endpoint, a large JSON file containing all the cities and their population in the USA

> the take away point is using promises to extract the .json file into a manipulable array

```
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []

fetch(endpoint)
  .then(blob => blob.json())
  //returns promises
  .then(data => cities.push(...data))
  // spread pushes non nested
```

> next we write a function to filter our cities array on keyboard input, we use regular expression to match the cities to the input which gets returned as a city or a state.


```
const searchInput = document.querySelector('.search');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

```

On events where the user releases the key or changes the search, the event will fire the displayMatches function which in turn will run the function we wrote earlier to return the city and state and display it to screen.
