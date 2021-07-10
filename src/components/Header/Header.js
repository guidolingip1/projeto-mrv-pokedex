import { useState } from 'react';
import { Card } from '../../components/Card';

import './header.css';

const Header = () => {

  const defaultPoke = {
    "name": "pikachu",
    "types": [
      "electric"
     ],
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  }
  
  
  const [meuPoke, setMeuPoke] = useState(defaultPoke);
  
  function getData(nomePokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
      .then(res => res.json())
      .then(poke => filterData(poke))
  };

  function filterData(poke) {
    let name = poke.['name']
    let type = poke.['types'];
    let hp = poke.['stats'][0].['base_stat'];
    let attack = poke.['stats'][1].['base_stat'];
    let defense = poke.['stats'][2].['base_stat'];
    let sprite = poke.['sprites'].['other'].['dream_world'].front_default;

    let types = []
    for (let i = 0; i < type.length; i++) {
      types.push(type[i].['type'].name);
    }

    let meuPokeObj = {
      name,
      types,
      hp,
      attack,
      defense,
      sprite
    }

    setMeuPoke(meuPokeObj);
  }

  function searchHandler(e) {
    if(e.key === "Enter"){
      getData(e.target.value);
    }
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 id='header-text'>Escolha seu Pokemon</h1>
          <input id="search" type="text" placeholder="Pesquise" onKeyDown={(e) => searchHandler(e)}/>
        </div>
      </div>
        <Card prop={meuPoke}/>
    </>
   );
}
 
export default Header;