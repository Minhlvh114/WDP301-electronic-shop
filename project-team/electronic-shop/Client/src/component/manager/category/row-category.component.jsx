const RowCategory = ({ category, index, openForm }) => {
  return (
    <tr>
      <td>{category._id || index + 1}</td>
      <td>{category.name}</td>
      <td>{category.status || 'active'}</td>
      <td>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('View', category)}>View</button>
        <button className="btn btn-sm btn-secondary" onClick={() => openForm('Edit', category)}>Edit</button>
        <button className="btn btn-sm btn-danger" disabled>Delete</button>
      </td>
    </tr>
  )
}

export default RowCategory
