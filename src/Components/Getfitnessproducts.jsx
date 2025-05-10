import  axios from 'axios'
import React from 'react'
import { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'

const Getfitnessproducts = () => {
  const navigate = useNavigate()

  const [loading,setLoading]= useState("")
  const [error,setError] = useState("")
  const [products,setproducts]= useState([])

  // Function to get products

  const getptoducts = async()=>{
    setLoading("Loading....")
    try{
      const response = await axios.get("https://germain254.pythonanywhere.com/api/fitness_productget")
      // console.log(response)
      setLoading("")
      setproducts(response.data)
    }catch (error){
      setLoading("")
      setError(error.message)
    }
  }
  // call function

  useEffect( ()=>{

    getptoducts()
  },[])
  console.log(products)
const image_path = "https://germain254.pythonanywhere.com/static/images/"
  return (
    <div className='row container-fluid'>
    
        <br />
        <hr />
        <br />
        <Carousel/>
        <br />
        <hr />
        <br />
      <h1 className='text-center' id='fitnessproducts'>Available Products</h1>
      
      {/* mapping  */}
      {products.map(product => ( 
      <div className='col-md-3 justify-content-center mt-3 ' >
        <div className='card shadow-lg p-4 '>
          {/* image goes here */}
          <img src={image_path + product.product_photo} alt="" />
          <div className='card-body'>
          <h5 className='text-success'>{product.product_name}</h5>
          <p className='text-dark'>{product.product_description}</p>
          <b className='text-danger'>KSH {product.product_price}</b>
          <button className='btn btn-dark w-100 mt-2 ' onClick={()=>navigate('/makefitnesspayment', {state: {product}})}>Buy Now</button>
          </div>
          </div> 

      </div>
      ))}
{/* End of mapping  */}
        
    </div>
  )
}




export default Getfitnessproducts