fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118')
  .then(response => response.json())
  .then(data => init(data))
  .catch(err => console.log(err));

function init(obj) {
    console.log(obj)
}