import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cart() {

    const cart = useSelector(state => state.cart)

  return (
    
    <div className="cartContainer">
            <h2>Shopping cart</h2>
        { cart.cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>Your cart is empty</p>
                <Link to="/"><span>Start shopping</span></Link>
            </div>
        ): (
        <div>
            <div className="titles">
                <h3 className="prodTitle">Drink</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
            </div>

            <div className='cartItem'>
                {cart.cartItems?.map(cartItem =>(
                    <div className='cartItem' key ={cartItem.idDrink}>
                        
                        <div class="cartCocktail">
                            <img  src={cartItem.strDrinkThumb} alt={cartItem.strDrink} className="dimg" />
                            <div>
                                <div>
                                    <h3>{cartItem.strDrink}</h3>
                                </div>
                               <button> Remove </button> 
                            </div>
                            
                        </div>

                        <div className="cartPrice">
                        <p>{parseInt(cartItem.idDrink.substring(0, 3))} kr.</p>
                        </div>
                        <div className="cartQuantity">
                            <button>-</button>
                            <div className="count">{cartItem.cartQuantity}</div>
                            <button>+</button>
                        </div>

                        <div className="totalPrice">
                         {cart.cartItems.reduce(
                        (total, cartItem) =>
                        total +
                        parseFloat(cartItem.idDrink.substring(0, 3)) *
                        cartItem.cartQuantity,
                        0).toFixed(2)} kr.
                        </div>
                    </div>
                    
                ))}

            </div>
        </div>
        )}
   
    </div>

  )
  
}



export default Cart