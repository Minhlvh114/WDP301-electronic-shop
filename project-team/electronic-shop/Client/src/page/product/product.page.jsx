import { Link, useSearchParams } from 'react-router-dom'
import './../../css/components.css'
import './../../css/design-system.css'
import { PRODUCTS } from './../../js/products-data'
import HeaderLayout from '../../layout/header.layout'
import ProductHeaderPageLayout from './../../component/product/product-header-page-layout'
import ProductFilter from '../../component/product/product-filter'
import ProductCard from '../../component/product/product-card'



function formatPrice(n) {
  return '$' + Number(n ?? 0).toLocaleString();
}

const MAX_PRICE = 3000
//khi render no se khoi tao hook truoc roi moi chay
//note: init > create
//eavẻy time use state it will create new field storage html tag of that param use hook(vd:[param,setParam] = useState())

const ProductPage = () => {

  //init set and get searchParams = useSearchParams()
  const [searchParams, setSearchParams] = useSearchParams()
  //get searchParams = category in url param and assign variable
  // console.log("searchParams1: ", searchParams.get('category'))

  const selectedCategory = searchParams.get('category')
  const maxPriceParam = searchParams.get('maxPrice')
  const selectedMaxPrice = maxPriceParam === null ? MAX_PRICE : Number(maxPriceParam) || MAX_PRICE

  //sort product before render
  const filteredProducts = PRODUCTS.filter((product) => {

    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    const matchesPrice = product.price <= selectedMaxPrice

    return matchesCategory && matchesPrice
  })

  


  return (
    <>
      {/* <!-- Header body: main header--> */}
      <HeaderLayout />

      {/* <!-- Header page: small header--> */}

      <ProductHeaderPageLayout selectedCategory={selectedCategory}  setSearchParams={setSearchParams}/>

      {/* <!-- body --> */}
      <main className="container listing-layout">

      {/* <!-- product filter --> */}
        <ProductFilter
          selectedCategory={selectedCategory}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          MAX_PRICE={MAX_PRICE}
          selectedMaxPrice={selectedMaxPrice}
          formatPrice={formatPrice}
        />

        {/* <ProductCard product={product}/> */}

        <div>
          <div className="listing-toolbar">
            <span className="text-small text-muted">{filteredProducts.length} products</span>
            <select className="sort-select"><option>Sort: Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select>
          </div>
          <div className="products-grid" id="listing-grid">
            {/* {filteredProducts.map(renderProductCard)} */}
            {filteredProducts.map((product) => {
                return <ProductCard product={product} formatPrice={formatPrice} key={product.id}/>
              }
            )}
          </div>
          <nav className="pagination"><span className="active">1</span><a href="#">2</a></nav>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer className="site-footer"><div className="container footer-bottom">© 2026 TechHome</div></footer>
    </>
  )
}

export default ProductPage
