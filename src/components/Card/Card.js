import './card.css';

const Card = (props) => {
  const {sprite, name, types, attack, defense, hp} = props.prop;
  return (
    <div className="container">
      <div className="card-container">
        <img id="pokemon-image" src ={sprite} alt="a" />
        <div className="stats">
          <h1>{name}</h1>
          <br />
          <div className="types">
          {types.map(function(type){
            return (<h3 id="type-tag"key={type}>{type}</h3>)
          })}
          </div>
          <br />
          <div className="atk-def">
            <h3 id="atk-def-tag">{`Hp: ${hp}`}</h3>
            <h3 id="atk-def-tag">{`Atk: ${attack}`}</h3>
            <h3 id="atk-def-tag">{`Def: ${defense}`}</h3>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Card;