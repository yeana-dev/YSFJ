import { useState, useEffect } from 'react'
import Detail from '../Detail/Detail'
import { getProducts } from '../../services/products'

const ProductCards = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  const CARDS = products
    .reverse()
    .map((product, index) =>
      index < 8 ? (
        <Detail
          _id={product._id}
          name={product.name}
          imgURL={product.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='products'>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default ProductCards