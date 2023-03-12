import{useState, useEffect} from 'react';



function Drinks(){
  const [cocktails, setCocktails] = useState([]);


 // const [lemons, setLemons] = useState([
 //   {title:'LemonSour', body: 'Lorem ipsum', price:'29kr', id: 1},
 //   {title:'Sweet n Sour', body: 'Lorem ipsum', price:'20kr', id: 2},
 //   {title:'SoulSour', body: 'Lorem ipsum', price:'49kr', id: 3},
 // ]);

 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const jsonData = await response.json();
    setCocktails(jsonData.drinks);
  };
  fetchData();
}, []);

return (
  <div>
    {cocktails.map(cocktail => (
      <div key={cocktail.idDrink}>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p>{cocktail.strInstructions}</p>
      </div>
    ))}
  </div>
);
}

export default Drinks;