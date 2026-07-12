import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from './form-product.component'
import RowProduct from './row-product.component'

const ManagerProduct = ({ panelClass }) => {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [mode, setMode] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = 'http://localhost:8080/product'

  const loadProducts = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(baseUrl)
      setProducts(response.data?.data || [])
    } catch (err) {
      setError(err.response?.data?.ERROR || err.response?.data?.error || err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const openForm = (formMode, product = null) => {
    setMode(formMode)
    setSelectedProduct(product)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setMode('')
    setSelectedProduct(null)
  }

  return (
    <section id="panel-products" className={panelClass('panel-products')}>
      <div className="page-intro"><h1>Quản lý Product</h1><p className="use-case-list">Add · Get all · Get by ID · Update · Delete</p></div>
      <div className="panel-toolbar"><input type="search" className="form-input" style={{ maxWidth: '200px' }} placeholder="Search..." />
        <button type="button" className="btn btn-primary" onClick={() => openForm('Add')}>+ Add product</button></div>
      <ProductForm show={showForm} onHide={closeForm} mode={mode} item={selectedProduct} baseUrl={baseUrl} onSave={loadProducts} />
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>SKU</th><th>Brand ID</th><th>Category ID</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {loading && (
              <tr><td colSpan="8">Loading products...</td></tr>
            )}
            {!loading && error && (
              <tr><td colSpan="8">{error}</td></tr>
            )}
            {!loading && !error && products.length === 0 && (
              <tr><td colSpan="8">No products found.</td></tr>
            )}
            {!loading && !error && products.map((product, index) => (
              <RowProduct product={product} index={index} openForm={openForm} key={product._id || index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerProduct