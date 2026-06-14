


const ProductRow = ({product}) => {
    return(
        <tr>
                  <td>{product.id}</td><td>{product.name}</td><td>{product.category}</td><td>{product.brands}</td><td>{product.price}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary">View</button>
                    <button className="btn btn-sm btn-secondary">Edit</button>
                    <button className="btn btn-sm btn-secondary">Delete</button>
                  </td>
                </tr>
    )
}

export default ProductRow