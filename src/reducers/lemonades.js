import{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/counter/CartSlice';

function Drinks(){
  const [cocktails, setCocktails] = useState([]);
  const dispatch = useDispatch();

 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon');
    const jsonData = await response.json();
    setCocktails(jsonData.drinks);
  };
  fetchData();
}, []);

const handleAddToCart = (cocktail) =>{
    dispatch(addToCart(cocktail))
}

return (
  <div className='container'>
    {cocktails.map(cocktail => (
      <div className="item"  key={cocktail.idDrink}>
        <h2>{cocktail.strDrink}</h2>
        <img  src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="dimg" />
        <p>{parseFloat(cocktail.idDrink.substring(0, 3))} kr.</p>
        <button onClick= {() => handleAddToCart(cocktail)}>add to cart</button>
        
      </div>
    ))}
  </div>
);
}

export default Drinks;