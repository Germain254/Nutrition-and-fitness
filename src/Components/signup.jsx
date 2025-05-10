import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
const Signup = ()=>{
    // initialize the state
    const[first_name,setfirstname] = useState('')
    const[last_name,setlastname] = useState('')
    const[email,setEmail] = useState('')
    const[password,setpassword] = useState('')
    const[phone,setphone] = useState('')

    // We want to have 3 states for posting data 
    // We have the following
    const [loading,setLoading]= useState("")
    const [error,setError] = useState("")
    const [success,setSuccess]= useState("")


    // We want to have a function to post data 
    // our signup will contain the following data: username, password, email, phone

    const submit = async(e)=>{
        // we want to prevent the browser from reloading upon clicking signup button
        e.preventDefault()
        // console.log("posting data")
        // We want to have a try and catch 
        try{
            // this works if we manage to post  
            setLoading("Please wait........")
            // get the user inputs from the form 
            // we are going to use form data and a ppend the following: Username, password, email, phone
            const data = new FormData()
            data.append("first_name", first_name)
            data.append("last_name", last_name)
            data.append("password", password)
            data.append("email", email)
            data.append("phone", phone)

            // now we can post the data
            // we use axios package:it comes with http request methods such as post, get, update, delete
            const responce =await axios.post("https://germain254.pythonanywhere.com/api/signup" , data)
            console.log(responce) 
            setSuccess(responce.data.message)
            setLoading("")



        } catch(error){
            // this works if there is an error eg network error or bad request
            setLoading("")
            setError(error.message)
        }
    }



    return(
        <div className="row justify-content-center d-flex align-items-center"
        style={{
            minHeight: '100vh',
            backgroundImage:'',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
             <br />
             <div className="col-md-4">
             <p href='' className="navbar-brand">
            <b className="text-success " style={{fontSize:"30px"}}>Nutrition <span className="text-dark">& Fitness</span></b>
          </p>
             </div>
        
            <div className="card shadow-lg col-md-6 p-4 text-center"
            style={{
                width: '90%',
                maxWidth: '500px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '15px',
                color: 'black',
              }}>
            <h1 className="text-center">Sign Up</h1>
            {/* bind loading  */}
            <h6 className="text-info">{loading}</h6>
            {/* bind success */}
            <h6 className="text-success">{success}</h6>
            {/* bind error */}
            <h6 className="text-danger">{error}</h6>
            <form onSubmit={submit}>
                <input type="text" placeholder="Enter first name"className="form-control" onChange={(e)=>setfirstname(e.target.value)}></input>
                <br />
                {first_name}
                <input type="text" placeholder="Enter last name"className="form-control" onChange={(e)=>setlastname(e.target.value)}></input>
                <br />
                {/* bind username  */}
                {last_name}
                <input type="email" placeholder="Enter Email"className="form-control" onChange={(e)=>setEmail(e.target.value)} ></input>
                <br />
                {/* bind email*/}
                {email}
                <input type="password" placeholder="Enter password"className="form-control" onChange={(e)=>setpassword(e.target.value)}></input>
                <br />
                {/* bind password*/}
                {password}
                <input type="text" placeholder="Enter Phone"className="form-control" onChange={(e)=>setphone(e.target.value)}></input>
                <br />
                {/* bind phone*/}
                {phone}
                <button type="submit"className="form-control btn btn-dark">Sign up</button>
                <br />
                <p className="text-center">Already have an account? <Link to='/signin' >signin</Link> </p>

            </form>
            </div>
    
        </div>

    )
}
export default Signup
