


const ManagerBrand = ({panelClass}) => {
  return (
    <section id="panel-brands" className={panelClass('panel-brands')}>
      <div className="page-intro"><h1>Quản lý Brand</h1><p className="use-case-list">Add · Get all · Update · Delete</p></div>
      <div className="panel-toolbar"><button type="button" className="btn btn-primary">+ Add brand</button></div>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Brand</th><th>Country</th><th>Actions</th></tr></thead>
          <tbody>
            {['Apple', 'Samsung', 'ASUS'].map((brand, index) => (
              <tr key={brand}><td>{index + 1}</td><td>{brand}</td><td>{index === 1 ? 'Korea' : index === 2 ? 'Taiwan' : 'USA'}</td><td><button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerBrand