import {Link} from 'react-router-dom'

const ProductHeaderPageLayout = ({ selectedCategory }) => {
  const categoryLabel = selectedCategory || 'All product'
  const titleCategory = selectedCategory ? selectedCategory.toLocaleLowerCase() : null

    return (
        <>
        {/* <!-- Header page--> */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link> / {categoryLabel}</nav>
          <h1>All {titleCategory} products</h1>
          <p className="text-muted text-small">Laptops, smartphones &amp; gadgets</p>
        </div>
      </div>
      </>
    )

}

export default ProductHeaderPageLayout
