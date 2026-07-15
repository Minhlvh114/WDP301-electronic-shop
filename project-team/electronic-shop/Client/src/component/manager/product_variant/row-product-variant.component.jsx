const ProductVariantRow = ({ variant, openForm }) => {
  return (
    <tr>
      <td>{variant._id}</td>
      <td>{variant.productName || variant.product_id?.name || variant.product_id || '—'}</td>
      <td>{variant.variant_name}</td>
      <td>{variant.color || '—'}</td>
      <td>{variant.storage || '—'}</td>
      <td>{variant.ram || '—'}</td>
      <td>{variant.price != null ? variant.price : '—'}</td>
      <td>{variant.sale_price != null ? variant.sale_price : '—'}</td>
      <td>{variant.stock_quantity != null ? variant.stock_quantity : '—'}</td>
      <td>{variant.reserved_quantity != null ? variant.reserved_quantity : '—'}</td>
      <td>{variant.is_active ? 'active' : 'inactive'}</td>
      <td>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('View', variant)}>View</button>{' '}
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('Edit', variant)}>Edit</button>
      </td>
    </tr>
  )
}

export default ProductVariantRow
