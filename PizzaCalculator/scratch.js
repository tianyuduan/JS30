let Hash = {13.99: "5.61", 18.99: "5.96", 21.99: "9.14"};
console.log(Hash[13.99]);
function willItWork(){

  let max = 9.14;
  let result = 0;
  function getKeyByValue(PizzaOptions, max) {
    console.log("hello");
    console.log(max);
    console.log(PizzaOptions);
    console.log(Object.keys(PizzaOptions));
    Object.keys(PizzaOptions).find(key => PizzaOptions[key] === max);
    return result;
  }
  getKeyByValue(Hash, max);
  console.log(result);
}
