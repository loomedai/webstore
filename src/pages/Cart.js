import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../features/counter/CartSlice'

function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart({ id: cartItem.idDrink }));
    };
  
    return (
      <div className="cartContainer">
        <h2>Shopping cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/"><span>Start shopping</span></Link>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="prodTitle">Drink</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
  
            <div className="cartItemList">
              {cart.cartItems?.map(cartItem => (
                <div className="cartItem" key={cartItem.idDrink}>
                  <div className="cartCocktail">
                    <img src={cartItem.strDrinkThumb} alt={cartItem.strDrink} className="dimg" />
                    <div>
                      <h3>{cartItem.strDrink}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem)}> fjern </button>
                    </div>
                  </div>
  
                  <div className="cartPrice">
                    {parseInt(cartItem.idDrink.substring(0, 3))} kr.
                  </div>
                  <div className="cartQuantity">
                    <button>-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button>+</button>
                  </div>
  
                  <div className="totalPrice">
                  {parseInt(cartItem.idDrink.substring(0, 3)) * cartItem.cartQuantity} kr.
                  </div>
                </div>
              ))}
            </div>
  
            <div className='cartSummary'>
              <button className='cartClear'> Slet alt</button>
              <div className='cartCheckout'>
                <div className='subtotal'>
                <span>i alt </span>
                <span className='amount'>
                  {cart.cartItems.reduce(
                    (total, cartItem) =>
                      total +
                      parseFloat(cartItem.idDrink.substring(0, 3)) *
                      cartItem.cartQuantity,
                    0).toFixed(0)} kr.
                </span>
                </div>
              </div>
              <button className='done'>Check ud</button>
              <div className="cartContinue">
                <Link to="/"><span>← Fortsæt med at shoppe</span></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  



export default Cart