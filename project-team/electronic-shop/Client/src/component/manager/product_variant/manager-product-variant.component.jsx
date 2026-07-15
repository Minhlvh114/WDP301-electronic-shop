import { useState } from 'react'
import ProductVariantForm from './form-product-variant.component'
import ProductVariantRow from './row-product-variant.component'

const sampleVariants = [
  {
    _id: '1001',
    productName: 'MacBook Pro 16"',
    product_id: 'p1001',
    sku: 'MBP16-36-1T-BLK',
    variant_name: '36GB / 1TB — Space Black',
    color: 'Space Black',
    storage: '1TB',
    ram: '36GB',
    attributes_json: { cpu: 'M3 Max', display: '16-inch' },
    images: ['https://example.com/images/mbp16-black.jpg'],
    price: 3299,
    sale_price: 2999,
    stock_quantity: 24,
    reserved_quantity: 2,
    is_active: true,
  },
  {
    _id: '1002',
    productName: 'MacBook Pro 16"',
    product_id: 'p1001',
    sku: 'MBP16-48-2T-SLV',
    variant_name: '48GB / 2TB — Silver',
    color: 'Silver',
    storage: '2TB',
    ram: '48GB',
    attributes_json: { cpu: 'M3 Max', display: '16-inch' },
    images: ['https://example.com/images/mbp16-silver.jpg'],
    price: 4199,
    sale_price: 3899,
    stock_quantity: 8,
    reserved_quantity: 1,
    is_active: true,
  },
]

const ManagerProductVariant = ({ panelClass }) => {
  const [variants, setVariants] = useState(sampleVariants)
  const [showForm, setShowForm] = useState(false)
  const [mode, setMode] = useState('')
  const [selectedVariant, setSelectedVariant] = useState(null)

  const openForm = (formMode, variant = null) => {
    setMode(formMode)
    setSelectedVariant(variant)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setMode('')
    setSelectedVariant(null)
  }

//   const saveVariant = (variant) => {
//     setVariants((current) => {
//       if (mode === 'Edit' && variant?._id) {
//         return current.map((item) => (item._id === variant._id ? variant : item))
//       }
//       return [{ ...variant, _id: `${Date.now()}` }, ...current]
//     })
//     closeForm()
//   }

  return (
    <section id="panel-product-variants" className={panelClass('panel-product-variants')}>
      <div className="page-intro">
        <h1>Quản lý Product Variant</h1>
        <p className="use-case-list">Add · Get all · Update · Delete</p>
      </div>
      <div className="panel-toolbar">
        <button type="button" className="btn btn-primary" onClick={() => openForm('Add')}>
          + Add variant
        </button>
      </div>
      <ProductVariantForm show={showForm} onHide={closeForm} mode={mode} item={selectedVariant}  />
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Variant</th>
              <th>Color</th>
              <th>Storage</th>
              <th>RAM</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Stock</th>
              <th>Reserved</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <ProductVariantRow key={variant._id || index} variant={variant} openForm={openForm} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerProductVariant
