


const ManagerProductDetails = ({panelClass}) => {

    return (
        <section id="panel-product-details" className={panelClass('panel-product-details')}>
            <div className="page-intro"><h1>Quản lý Product Detail</h1><p className="use-case-list">Add · Get all · Update · Delete</p></div>

            <div className="panel-toolbar"><button type="button" className="btn btn-primary">+ Add product detail</button></div>
            <div className="data-table-wrap">
                <table className="data-table">
                    <thead><tr><th>ID</th><th>Product</th><th>Spec / Variant</th><th>Stock</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>1001</td><td>MacBook Pro 16"</td>
                            <td>36GB / 1TB — Space Black</td>
                            <td>24</td>
                            <td>
                                <button className="btn btn-sm btn-secondary">Edit</button> 
                                <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                                </tr>
                        <tr><td>1002</td><td>MacBook Pro 16"</td><td>48GB / 2TB — Silver</td><td>8</td><td><button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
                        <tr><td>1003</td><td>Galaxy S26 Ultra</td><td>256GB — Titanium</td><td>56</td><td><button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td></tr>
                    </tbody>
                </table>
            </div>
            <div className="card card-body mt-4" style={{ maxWidth: '520px' }}>
                <h3 className="heading-3 mb-4">Form: Product detail</h3>
                <div className="form-group"><label className="form-label">Product</label><select className="form-select"><option>MacBook Pro 16"</option><option>Galaxy S26 Ultra</option></select></div>
                <div className="form-group"><label className="form-label">Description / Specs</label><textarea className="form-textarea" rows="3"></textarea></div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Price</label><input type="number" className="form-input" /></div>
                    <div className="form-group"><label className="form-label">Stock</label><input type="number" className="form-input" /></div>
                </div>
                <button type="button" className="btn btn-primary">Save detail</button>
            </div>
        </section>
    )
}

export default ManagerProductDetails