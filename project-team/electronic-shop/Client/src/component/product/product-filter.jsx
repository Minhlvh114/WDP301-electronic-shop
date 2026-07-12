import { CategoryEnum } from '../../enum/category.enum'


const ProductFilter = ({selectedCategory, searchParams, setSearchParams, MAX_PRICE, selectedMaxPrice, formatPrice}) => {

  //get filters-category param - to sort product before render
  const handleCategoryChange = (category) => {
    //get filters-category param when user click 
    //create temp param: new searchParams because searchParams is function return URLSearchParams object
    const nextParams = new URLSearchParams()

    //neu selectedCategory === category thi nextParams = ''
    //neu selectedCategory !== category thi nextParams = category
    if (selectedCategory !== category) {
      nextParams.set('category', category)
    }
    setSearchParams(nextParams)
  }

  const handlePriceChange = (event) => {
    const price = Number(event.target.value)
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('maxPrice', price)
    setSearchParams(nextParams)
  }

  return (
    // <>
    <aside className="filter-sidebar">
      <h3 className="heading-3" style={{ marginBottom: '1rem' }}>Filters</h3>
      <div className="filter-group">
        <h3>Category</h3>
        <label className="filter-option"><input type="checkbox" checked={selectedCategory === 'Laptops'} onChange={() => handleCategoryChange('Laptops')} /> Laptops</label>
        <label className="filter-option"><input type="checkbox" checked={selectedCategory === 'Smartphones'} onChange={() => handleCategoryChange('Smartphones')} /> Smartphones</label>
        <label className="filter-option"><input type="checkbox" checked={selectedCategory === CategoryEnum.gadgets} onChange={() => handleCategoryChange(CategoryEnum.gadgets)} /> Gadgets</label>
      </div>
      <div className="filter-group">
        <h3>Price</h3>
        <input
          type="range"
          className="form-input"
          min="0"
          max={MAX_PRICE}
          value={selectedMaxPrice}
          onChange={handlePriceChange}
          style={{ width: '100%' }}
        />
        <p className="text-small text-muted" style={{ marginTop: '0.5rem' }}>
          Up to {formatPrice(selectedMaxPrice)}
        </p>
      </div>
    </aside>
  )
}

export default ProductFilter
