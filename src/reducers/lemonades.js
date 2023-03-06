import React, {useState, useEffect} from 'react';


const [lemons, setLemons] = useState([
  {title:'LemonSour', body: 'Lorem ipsum', price:'29kr', id: 1},
  {title:'Sweet n Sour', body: 'Lorem ipsum', price:'20kr', id: 2},
  {title:'SoulSour', body: 'Lorem ipsum', price:'49kr', id: 3},
]);

function drinks(){

  useEffect(() =>{
  fetch("")
  .then((response) => response.json())
  .then((data) => setLemons(data));
  }, []);

  return(
    <div className=''>

      {lemons.map((lemon) => (
        <div className='blog-preview'></div>

      ))}
    </div>

  );

}

export default drinks;