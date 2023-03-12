import{useState, useEffect} from 'react';
import { Counter } from '../features/counter/Counter';

function Drinks(){
  const [cocktails, setCocktails] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const jsonData = await response.json();
    setCocktails(jsonData.drinks);
  };
  fetchData();
}, []);

return (
  <div className='container'>
    {cocktails.map(cocktail => (
      <div className="item"  key={cocktail.idDrink}>
        <h2>{cocktail.strDrink}</h2>
        <img  src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="dimg" />
        <button className="btn">Add to cart</button>
      </div>
    ))}
  </div>
);
}

export default Drinks;