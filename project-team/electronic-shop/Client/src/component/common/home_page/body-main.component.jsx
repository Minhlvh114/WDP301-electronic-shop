import { Link } from 'react-router-dom'
import ProductCard from '../../product/product-card'

const formatPrice = (price) => '$' + price.toLocaleString()


const BodyMain = ({phones, laptops}) => {


    return (
        <>
            {/* <!-- Categories --> */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-head">
                        <h2>Shop by category</h2>
                        <p>Laptops, smartphones &amp; smart gadgets — all in one place</p>
                    </div>
                    <div className="category-pills">
                        <Link to="/product" className="category-pill">All <span>48 items</span></Link>
                        <Link to="/product" className="category-pill">Laptops <span>48 items</span></Link>
                        <Link to="/product?cat=phones" className="category-pill">Smartphones <span>62 items</span></Link>
                        <Link to="/product" className="category-pill">Tablets <span>18 items</span></Link>
                        <Link to="/product" className="category-pill">Accessories <span>120+ items</span></Link>
                    </div>
                </div>
            </section>

            {/* <!-- Laptops grid --> */}
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <h2>Featured laptops</h2>
                        <p>High-performance machines for work and creativity</p>
                    </div>
                    <div className="products-grid" id="laptops-grid">
                        {laptops.map((product, index) => {
                            return <ProductCard product={product} formatPrice={formatPrice} key={product.id || index} />
                        })}
                    </div>
                </div>
            </section>

            {/* <!-- Smartphones grid --> */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-head">
                        <h2>Latest smartphones</h2>
                        <p>Flagship devices with stunning displays and cameras</p>
                    </div>
                    <div className="products-grid" id="phones-grid">
                        {phones.map((product, index) => {
                            return <ProductCard product={product} formatPrice={formatPrice} key={product.id || index} />
                        })}
                    </div>
                    <p className="text-center mt-4">
                        <Link to="/product" className="btn btn-secondary">View all products</Link>
                    </p>
                </div>
            </section>

            {/* <!-- Trust --> */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container trust-row">
                    <div className="trust-item"><strong>Free delivery</strong><span>On orders $99+</span></div>
                    <div className="trust-item"><strong>2-year warranty</strong><span>Official coverage</span></div>
                    <div className="trust-item"><strong>Secure checkout</strong><span>SSL encrypted</span></div>
                    <div className="trust-item"><strong>24/7 support</strong><span>Expert help</span></div>
                </div>
            </section>
        </>
    )
}

export default BodyMain