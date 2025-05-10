import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Addfitnessproduct =()=>{
    const[product_name,setProductname] = useState("")
    const[product_description,setProductdescription] = useState("")
    const[product_price,setproductprice] = useState("")
    const[product_photo,setProductphoto] = useState("")

  
   // We want to have 3 states for posting data 
    // We have the following
    const [loading,setLoading]= useState("")
    const [error,setError] = useState("")
    const [success,setSuccess]= useState("")


    // We want to have a function to post data 
    // our signin will contain the following data: username, password, email, phone

    const submit = async(e)=>{
        // we want to prevent the browser from reloading upon clicking signin button
        e.preventDefault()
        // console.log("posting data")
        // We want to have a try and catch 
        try{
            // this works if we manage to post  
            setLoading("Please wait........")
            // get the user inputs from the form 
            // we are going to use form data and a ppend the following: Username, password, email, phone
            const data = new FormData()
 
            data.append("product_name", product_name)
            data.append("product_description", product_description)
            data.append("product_price", product_price)
            data.append("product_photo", product_photo)
          

            // now we can post the data
            // we use axios package:it comes with http request methods such as post, get, update, delete
            const response =await axios.post("https://germain254.pythonanywhere.com/api/fitness_productadd" , data)
            console.log(response) 
            setSuccess(response.data.message)
            setLoading("")



        } catch(error){
            // this works if there is an error eg network error or bad request
            setLoading("")
            setError(error.message)
        }
    }
    return(
    

        <div className="d-flex justify-content-center align-items-center"
        style={{
            minHeight: '90vh',
            backgroundImage:'',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        
        
            <div className="card shadow-lg col-md-6 p-4"
            style={{
                width: '90%',
                maxWidth: '500px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '15px',
                color: 'white',
              }}>
            <h1 className="text-center text-dark">
                Add Product 
            </h1>
             {/* bind loading  */}
             <h6 className="text-info">{loading}</h6>
            {/* bind success */}
            <h6 className="text-success">{success}</h6>
            {/* bind error */}
            <h6 className="text-danger">{error}</h6>
            <form onSubmit={submit} >
                {/* <label htmlFor="">Product name</label> */}
                <input type="text" placeholder="Enter product name"  className="form-control" required value={product_name} onChange={(e) => setProductname(e.target.value)}></input>
                <br />
                {/* <label htmlFor="">Product description</label> */}
                <input type="text" placeholder="Enter product description"  className="form-control" required value={product_description} onChange={(e) => setProductdescription(e.target.value)}></input>
                <br />
                {/* <label htmlFor="">price</label> */}
                <input type="number" placeholder="Enter product Price (Ksh)"  className="form-control" required value={product_price} onChange={(e) => setproductprice(e.target.value)}></input>
                <br />
                {/* <label htmlFor="">Product photo</label> */}
                <input type="file" placeholder="Choose product photo" className="form-control" required onChange={(e)=>setProductphoto(e.target.files[0])} accept='image/*'></input>
                <br />
                <button type="submit" className="btn btn-dark form-control">Add Product</button>
                <br />
               



            </form>
            </div>
        </div>

    )
}

export default Addfitnessproduct