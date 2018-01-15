### Extracting data from JSON to display

> This project contains an API endpoint, a large JSON file containing all the cities and their population in the USA

> the take away point is using promises to extract the .json file into a manipulative array

```
const cities = []
fetch(endpoint)
  .then(blob => blob.json())
  //returns promises
  .then(data => cities.push(...data))
  // spread pushes non nested
```

> next we write 
