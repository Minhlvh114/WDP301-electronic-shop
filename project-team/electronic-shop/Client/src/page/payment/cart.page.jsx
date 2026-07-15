import { useState } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../../css/components.css'
import './../../css/design-system.css'
import Cart from '../../js/cart'

const initialItems = [
  { id: 1, emoji: '💻', name: 'MacBook Pro 16"', details: 'Space Black · 1TB', price: 2499 },
  { id: 2, emoji: '📱', name: 'iPhone 17 Pro Max', details: '256GB', price: 1199 },
]

const formatPrice = (price) => '$' + price.toLocaleString()


const CartPage = () => {

  const [quantities, setQuantities] = useState({})

  const updateQuantity = (id, amount) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.min(99, Math.max(1, (current[id] ?? 1) + amount)),
    }))
  }

  const cartItems = Cart.showCart()
  const total = cartItems.reduce((sum, item) => {
    const qty = Number(quantities[item._id] ?? 1)
    return sum + item.price * qty
  }, 0)
  Cart.setTotal(total)
  console.log("cart total: ",   Cart.getTotal());
  

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </span>
            Tech<em>Home</em>
          </Link>
          <Link to="/product" className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }}>Continue shopping</Link>
        </div>
      </header>

      <main className="container">

        <h1 className="heading-2" style={{ padding: '2rem 0 1rem' }}>Your cart</h1>

        <div className="cart-layout">

          <div>
            {Cart.showCart().map((item) => { console.log(item);
             ; return (

              
              <div className="cart-item" key={item._id}>
                {/* <div className="cart-item-thumb">{item.images[0]}</div> */}
                <Image className='image' src={item.images[0]} thumbnail />

                <div><strong>{item.name}</strong><p className="text-small text-muted">{item.sku}</p></div>
                <div className="qty-selector">
                  <button type="button" onClick={() => updateQuantity(item._id, -1)}>−</button>
                  <input value={quantities[item._id] ?? 1} readOnly />
                  <button type="button" onClick={() => updateQuantity(item._id, 1)}>+</button>
                </div>
                <strong>{formatPrice(item.price * (quantities[item._id] ?? 1))}</strong>
              </div>
            )})}
          </div>

          <aside className="order-summary">
            <h3>Summary</h3>
            <div className="summary-row"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
            <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
            <Link to="/checkout" className="btn btn-primary btn-block" style={{ marginTop: '1.25rem' }}>Checkout</Link>
          </aside>

        </div>
      </main>
    </>
  )
}

export default CartPage
