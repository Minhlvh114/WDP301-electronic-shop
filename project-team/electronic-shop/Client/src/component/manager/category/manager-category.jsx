



const ManagerCategory = ({panelClass}) => {
    return (
         <section id="panel-categories" className={panelClass('panel-categories')}>
          <div className="page-intro"><h1>Quản lý Category</h1><p className="use-case-list">Add · Get all (Guest/User/Admin) · Update · Delete</p></div>
          <div className="panel-toolbar"><span className="text-small text-muted">Guest/User/Admin đều xem được danh sách</span><button type="button" className="btn btn-primary">+ Add category</button></div>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr><th>ID</th><th>Name</th><th>Slug</th><th>Actions</th></tr></thead>
              <tbody>
                {['Laptops', 'Smartphones', 'Gaming', 'PC Components'].map((name, index) => (
                  <tr key={name}><td>{index + 1}</td><td>{name}</td><td>{name.toLowerCase().replace(' ', '-')}</td><td><button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    )
}

export default ManagerCategory