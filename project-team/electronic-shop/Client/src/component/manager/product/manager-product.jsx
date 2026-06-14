
import { PRODUCTS } from './../../../js/products-data'

const ManagerProduct = ({ panelClass }) => {
  return (
    <section id="panel-products" className={panelClass('panel-products')}>
      <div className="page-intro"><h1>Quản lý Product</h1><p className="use-case-list">Add · Get all · Get by ID · Update · Delete</p></div>
      <div className="panel-toolbar"><input type="search" className="form-input" style={{ maxWidth: '200px' }} placeholder="Search..." /><button type="button" className="btn btn-primary">+ Add product</button></div>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Brand</th><th>Price</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td>101</td><td>MacBook Pro 16"</td><td>Laptops</td><td>Apple</td><td>$2,499</td>
              <td>
                <button className="btn btn-sm btn-secondary">View</button>
                <button className="btn btn-sm btn-secondary">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
            <tr><td>102</td><td>Galaxy S26 Ultra</td><td>Smartphones</td><td>Samsung</td><td>$1,099</td><td><button className="btn btn-sm btn-secondary">View</button> <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
            <tr><td>103</td><td>RTX 5090</td><td>PC Components</td><td>NVIDIA</td><td>$1,999</td><td><button className="btn btn-sm btn-secondary">View</button> <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
            {PRODUCTS.map((product) => {
              console.log(product.id)
              return (
                <tr>
                  <td>{product.id}</td><td>{product.name}</td><td>{product.category}</td><td>{product.brands}</td><td>{product.price}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary">View</button>
                    <button className="btn btn-sm btn-secondary">Edit</button>
                    <button className="btn btn-sm btn-secondary">Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerProduct