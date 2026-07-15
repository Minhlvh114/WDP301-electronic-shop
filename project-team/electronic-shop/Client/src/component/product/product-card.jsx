import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Cart from '../../js/cart'
import { useEffect } from 'react'


const ProductCard = ({ product, formatPrice }) => {

    // console.log('---------product', product)

    const handleAddToCart = (product) => {
        Cart.addCart(product)
        const cart = Cart.showCart()
        console.log("cart", cart.length);
        
    }
    // useEffect(() => {}, [handleAddToCart])

    // const doAddToCart = (product) => {
    //     if (typeof handleAddToCart === 'function') {
    //         handleAddToCart(product)
    //     } else {
    //         Cart.addCart(product)
    //     }
    // }

    return (
        <>
            <article className="product-card">
                <div className="product-card__media">
                    {product.is_featured === true && <span className="badge badge-new product-card__badge">New</span>}
                    {product.total_reserved === 0 && <span className="badge badge-sale product-card__badge">Soled</span>}
                    {/* <span className="emoji">{product.emoji || product.images[0]}</span> */}
                    <Image className='image' src={product.images[0]} thumbnail />
                </div>
                <div className="product-card__body">

                    <span className="product-card__cat">{product.category}</span>
                    <h3 className="product-card__title">
                        <Link to={`/product-detail?id=${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="product-card__price">
                        <span className="now">{formatPrice(product.sale_price)}</span>
                        {product.price && <span className="was">{formatPrice(product.price)}</span>}
                    </div>
                    {/* <Link to="/cart" className="btn btn-primary btn-add">Add to Cart</Link> */}
                    <button className="btn btn-primary btn-add" onClick={() => handleAddToCart(product)}>Add to Cart</button>

                </div>
            </article>
        </>
    )
}

export default ProductCard