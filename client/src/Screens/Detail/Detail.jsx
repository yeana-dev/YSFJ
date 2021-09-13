import { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Layout } from '../../components'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'

const Detail = (props) => {
  const [detail, setDetail] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const detail = await getProduct(id)
      setDetail(detail)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='detail'>
        <img
          className='detail-image'
          src={detail.imgURL}
          alt={detail.name}
        />
        <div className='detail'>
          <div className='name'>{detail.name}</div>
          <div className='price'>{`$${detail.price}`}</div>
          <div className='description'>{detail.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/products/${detail._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteProduct(detail._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Detail