import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import casuals from '../images/casuals.jpg'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { useContext } from 'react'

const Details = () => {

  const products = useContext(ProductContext)

  let params = useParams()
  const productId = params.params-1

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className='wrapper-imgdiv'>
            <img src={products[productId].image} alt="" />
        </div>
        <div className='wrapper-contentdiv'>
          <h1>{products[productId].title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil molestiae nostrum deleniti dicta voluptatum neque ex nesciunt.</p>
          <h6>${products[productId].price}</h6>
          <div className="wrapper-buttons">
            <Button variant='contained' size='md'>
              <i className="fa-solid fa-bag-shopping"></i>
              <span> Purchase</span>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Details