import casuals from '../images/casuals.jpg'
import { Button } from '@mui/material'
import { ProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const SingleProduct = () => {

  let navigate = useNavigate()
  const products = useContext(ProductContext)

  return (
    <>
        <div className="wrapper">
          <div className='wrapper-imgdiv'>
            <img src={casuals} alt="" />
          </div>
          <div className='wrapper-contentdiv'>
            <h1>Men's Cotton Jacket</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil molestiae nostrum deleniti dicta voluptatum neque ex nesciunt.</p>
            <h6>$55.99</h6>
            <div className="wrapper-buttons">
            <Button variant='contained' color='success' size='large' onClick={() => navigate(`/details/3`) }><i className="fa-solid fa-circle-question"></i><span> Check Product</span></Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleProduct