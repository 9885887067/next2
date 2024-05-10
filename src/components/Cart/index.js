// Write your JS code here
import './index.css'

import Header from '../Header'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-image"
      />
      <p className="cart">Cart</p>
    </div>
  </>
)

export default Cart
