import {Link} from 'react-router-dom'


const ProductCard = ({product, formatPrice}) => {

    // console.log('product', product)

    return (
        <>
            <article className="product-card">
                <div className="product-card__media">
                    {product.badge === 'new' && <span className="badge badge-new product-card__badge">New</span>}
                    {product.badge === 'sale' && <span className="badge badge-sale product-card__badge">Sale</span>}
                    <span className="emoji">{product.emoji}</span>
                </div>
                <div className="product-card__body">

                    <span className="product-card__cat">{product.category}</span>
                    <h3 className="product-card__title">
                        <Link to={`/product-detail?id=${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="product-card__price">
                        <span className="now">{formatPrice(product.price)}</span>
                        {product.oldPrice && <span className="was">{formatPrice(product.oldPrice)}</span>}
                    </div>
                    <Link to="/cart" className="btn btn-primary btn-add">Add to Cart</Link>
                </div>
            </article>
        </>
    )
}

export default ProductCard