import { Link } from 'react-router-dom'
import './../../css/components.css'
import './../../css/design-system.css'
import './../../css/pages.css'
import HeaderLayout from '../../layout/header.layout'
import FooterLayout from '../../layout/footer.layout'
import { useState, useEffect } from 'react'
import { default as axios } from 'axios'
import HeaderMain from '../../component/common/home_page/header-main.component'
import BodyMain from '../../component/common/home_page/body-main.component'
 

const HomePage = () => {

  // const [products, setProducts] = useState(PRODUCTS)

  const [products, setProducts] = useState([])


  //tra ve cac san pham co category la laptop
  const laptops = products.filter((product) => product.category_id.name === 'Laptops')
  //tra ve cac san pham co category la smartphone
  const phones = products.filter((product) => product.category_id.name === 'Smartphones')

  const getAllProduct = async () => {
    await axios.get('http://localhost:8080/product')
      .then((response) => {
        console.log("response.data")

        // console.log(response.data.data[0].category_id)

        const data = response.data?.data || []
        setProducts(data)

      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(() => {
    getAllProduct()
  }, [])


  return (
    <div className="container">
      {/* <!-- Header --> */}
      <HeaderLayout />

      <main>
        {/* <!-- Header main  --> */}
        <HeaderMain />

        {/* <!-- Body main --> */}
        <BodyMain laptops={laptops} phones={phones} />

      </main>


      <FooterLayout />

    </div>
  )
}

export default HomePage

















// const renderProductCard = (product) => (
//   <article className="product-card" key={(product.id)}>
//     <div className="product-card__media">
//       {product.badge === 'new' && <span className="badge badge-new product-card__badge">New</span>}
//       {product.badge === 'sale' && <span className="badge badge-sale product-card__badge">Sale</span>}
//       <span className="emoji">{product.emoji}</span>
//     </div>
//     <div className="product-card__body">
//       <span className="product-card__cat">{product.category}</span>
//       <h3 className="product-card__title">
//         <Link to={`/product-detail?id=${product.id}`}>{product.name}</Link>
//       </h3>
//       <div className="product-card__price">
//         <span className="now">{formatPrice(product.price)}</span>
//         {product.oldPrice && <span className="was">{formatPrice(product.oldPrice)}</span>}
//       </div>
//       <Link to="/cart" className="btn btn-primary btn-add">Add to Cart</Link>
//     </div>
//   </article>
// )
