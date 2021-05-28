var dataUrl = 'https://jsonp.afeld.me/?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffanzeyi%2Fpokemon.json%2Fmaster%2Fpokedex.json';
var unDerpOnePokemon = function(inputPokemon){
  return {
    id: inputPokemon.id,
    name: inputPokemon.name.english,
    stamina: inputPokemon.base['HP'],
    attack: inputPokemon.base['Attack'],
    defense: inputPokemon.base['Defense'],
    speed: inputPokemon.base['Speed'],
  };
};
var handleDataLoad = function (data){
  console.log("Our data loaded", data);
  var processedData = data.map(unDerpOnePokemon);
  console.log("Underped = True", processedData);
  app.pokemonList = processedData;
};
var handleResponse = function (response){
  console.log("Horray our response responded!!", response);
  var dataPromise = response.json();
  dataPromise.then(handleDataLoad);
};

var requestPromise = fetch(dataUrl);

requestPromise.then(handleResponse);
