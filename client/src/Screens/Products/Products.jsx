import { useState, useEffect } from 'react'
import './Products.css'
import Layout from '../../Components/Layout/Layout'
import Detail from '../../Components/Detail/Detail'
import { getProducts } from '../../Services/products'

function Products(props) {
  const [products, setProducts] = useState([])
  // const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
      console.log(allProducts)
      // setSearchResult(allProducts)
    }
    fetchProducts()
  }, [])

  return (
    <Layout user={props.user}>
      {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} /> */}
      {/* <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
      <div className='products'>
        {products.map((product, index) => {
          return (
            <Detail
              _id={product._id}
              title={product.title}
              imgURL={product.imgURL}
              price={product.price}
              color={product.color}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )

}
export default Products