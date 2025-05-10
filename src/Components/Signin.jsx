import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import  axios  from "axios"

const Signin = ()=>{
    const [email,setEmail] = useState("")
    const[password, setpassword] = useState("")

    const [loading,setLoading]= useState("")
    const [error,setError] = useState("")
    const [success,setSuccess]= useState("")

      // 🔽 ADDED: Hook for redirection after login
  const navigate = useNavigate();
  // 🔼 END ADDED

    const submit = async(e)=>{
        e.preventDefault()
        setLoading("Please wait..")
        try{
            const data = new FormData()
            data.append("email", email)
            data.append("password", password)

            const response = await axios.post("https://germain254.pythonanywhere.com/api/signin",data)
            
            setSuccess(response.data.message)
            setLoading("")

             // 🔽 ADDED: Store user in localStorage and redirect
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/getfitnessproducts");
      } else {
        setError(response.data.message || "Login failed");
      }
      // 🔼 END ADDED

        }
        catch(error){
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
            <h1 className="text-center">Sign In</h1>
            <h6 className="text-info">{loading}</h6>
            <h6 className="text-success">{success}</h6>
            <h6 className="text-danger">{error}</h6>
            <form onSubmit={submit}>
                <input type="email" placeholder="Enter email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                {email}
                <br />
                <input type="password" placeholder="Enter password" className="form-control" onChange={(e)=>setpassword(e.target.value)}/>
                {password}
                <br />
                <button type="submit" required className="btn btn-dark form-control">sign In</button>
                <br />
                <p className="text-center">Don't have an account? <Link to='/signup'>signup</Link></p>
            </form>

            </div>

        </div>

    )
}
export default Signin