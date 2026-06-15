


const ProductDetailRow = ({productDetail, product}) => {
    return(
        <tr><td>{productDetail.id}</td><td>{product.name}</td><td>{productDetail.spec} / {productDetail.variant}</td><td>{productDetail.stock}</td><button className="btn btn-sm btn-secondary">Edit</button><button className="btn btn-sm btn-secondary">View</button><button className="btn btn-sm btn-secondary">Edit</button></tr>
    )
}

export default ProductDetailRow