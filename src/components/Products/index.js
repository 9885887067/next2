// Write your JS code here

import './index.css'

import Header from "../Header"

const Products = () => (
  <>
  <Header/>
  <div className="product-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      alt="product"
      className="product-image"
    />
    <p className="product">Product</p>
  </div>
  </>
)

export default Products
