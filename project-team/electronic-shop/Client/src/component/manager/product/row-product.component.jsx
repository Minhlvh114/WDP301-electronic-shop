
const RowProduct = ({ product, index, openForm }) => {
  return (
    <tr>
      <td>{product._id || index + 1}</td>
      <td>{product.name}</td>
      <td>{product.sku}</td>
      <td>{product.brand_id?.name || product.brand_id?._id || product.brand_id || '—'}</td>
      <td>{product.category_id?.name || product.category_id?._id || product.category_id || '—'}</td>
      <td>{product.price != null ? product.price : '—'}</td>
      <td>{product.status || 'active'}</td>
      <td>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('View', product)}>View</button>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('Edit', product)}>Edit</button>
        <button className="btn btn-sm btn-danger" disabled>Delete</button>
      </td>
    </tr>
  )
}

export default RowProduct