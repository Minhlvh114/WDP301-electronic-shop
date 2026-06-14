


const ManagerUser = ({panelClass}) => {
    return (
        <section id="panel-users" className={panelClass('panel-users')}>
          <div className="page-intro">
            <h1>Quản lý User</h1>
            <p className="use-case-list">Add user · Get all users · Get user by ID · Update user · Change user status · Delete user</p>
          </div>
          <div className="panel-toolbar">
            <input type="search" className="form-input" style={{ maxWidth: '240px' }} placeholder="Tìm user..." />
            <button type="button" className="btn btn-primary">+ Add user</button>
          </div>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>James Davidson</td><td>john@email.com</td><td>User</td><td><span className="badge badge-active">Active</span></td><td><button className="btn btn-sm btn-secondary">View</button> <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
                <tr><td>2</td><td>Admin System</td><td>admin@techhome.com</td><td>Admin</td><td><span className="badge badge-active">Active</span></td><td><button className="btn btn-sm btn-secondary">View</button> <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary">Status</button></td></tr>
                <tr><td>3</td><td>Maria Lopez</td><td>maria@email.com</td><td>User</td><td><span className="badge badge-inactive">Inactive</span></td><td><button className="btn btn-sm btn-secondary">View</button> <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
              </tbody>
            </table>
          </div>
          <div className="card card-body mt-4" style={{ maxWidth: '480px' }}>
            <h3 className="heading-3 mb-4">Form: Add / Update user</h3>
            <div className="form-row">
              <div className="form-group"><label className="form-label">Full name</label><input className="form-input" /></div>
              <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-input" /></div>
            </div>
            <div className="form-group"><label className="form-label">Role</label><select className="form-select"><option>User</option><option>Admin</option></select></div>
            <div className="form-group"><label className="form-label">Status</label><select className="form-select"><option>Active</option><option>Inactive</option></select></div>
            <button type="button" className="btn btn-primary">Save user</button>
          </div>
        </section>
    )
}

export default ManagerUser