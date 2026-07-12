const RowBrand = ({ brand, index, openForm }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{brand.name}</td>
      <td>{brand.logo_img || '—'}</td>
      <td>{brand.status || 'active'}</td>
      <td>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('View', brand)}>View</button>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('Edit', brand)}>Edit</button>
        <button className="btn btn-sm btn-danger" disabled>Delete</button>
      </td>
    </tr>
  )
}

export default RowBrand