import React, { useState } from 'react'
import axios from 'axios'

function ContactUs() {
    const [email,setEmail] = useState("")
    const[comment, setcomment] = useState("")

    const [loading,setLoading]= useState("")
    const [error,setError] = useState("")
    const [success,setSuccess]= useState("")

    const submit = async(e)=>{
        e.preventDefault()
        setLoading("Please wait..")
        try{
            const data = new FormData()
            data.append("email", email)
            data.append("comment", comment)

            const responce = await axios.post("https://germain254.pythonanywhere.com/api/comment",data)
            
            setSuccess(responce.data.message)
            setLoading("")

        }
        catch(error){
            setLoading("")
            setError("An error occurred. Please try again.")
        }
    }

  return (
  
    
    <div className='row container-fluid'>
       
    
    <div className="col-md-4 text-dark " 
    style={{
        minHeight: '100vh',
        backgroundImage:'',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

<div
        className="card shadow-lg p-4 text-center justify-content-center align-items-center"
        style={{
          width: '90%',
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          color: 'black',
        }}>
                <h2 className="h4">Get in Touch</h2>
                <p>We would love to hear from you! Feel free to reach out through any of the methods below:</p>
                <ul className="list-unstyled">
                    <li><strong>Email:</strong> <a href="mailto:info@nutritionandfitness.com" >info@nutritionandfitness.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+254759501434">+25475 943 591</a></li>
                    <li><strong>Address:</strong> 123 Fitness St, Wellness City, HZ 56789</li>
                </ul>
         
                <h2 className="h4">Follow Us</h2>
                <div className="d-flex justify-content-around">
                    <a href="https://facebook.com" target="_blank">
                        <img src="fb.png" alt="Facebook" className="img-fluid rounded-circle" width="50" height="50" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src="x.png" alt="Twitter" className="img-fluid rounded-circle" width="50" height="50"/>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <img src="in.png" alt="Instagram" className="img-fluid rounded-circle" width="50" height="50"/>
                    </a>
                </div>
                </div>
  </div>

   <div className="col-md-4 text-dark  "
   style={{
    minHeight: '100vh',
        backgroundImage:'',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

  }}>
    
    <div
        className="card shadow-lg p-4 text-center justify-content-center align-items-center"
        style={{
          width: '90%',
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          color: 'black',
        }}>
    <br />
    <br />
    <h4>Contact Us</h4>
    {loading}
    {success}
    {error}
    <form action="">
      <input type="email" name="email" id="email" placeholder="Enter your Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <textarea name="comment" id="comment" placeholder="Leave a message" className="form-control" value={comment} onChange={(e) => setcomment(e.target.value)}></textarea>
      <br />
      <br />
      <input type="submit" value="Send Message & subscribe newsletters" className="btn btn-outline-danger" onClick={submit} />
    </form>
   </div>
   
   </div>
    

<div className="col-md-4 text-dark"
style={{
 minHeight: '100vh',
     backgroundImage:'',
     backgroundSize: 'cover',
     backgroundPosition: 'center',

}}>
 
 <div
     className="card shadow-lg p-4 text-center justify-content-center align-items-center"
     style={{
       width: '90%',
       maxWidth: '500px',
       background: 'rgba(255, 255, 255, 0.1)',
       backdropFilter: 'blur(10px)',
       border: '1px solid rgba(255,255,255,0.2)',
       borderRadius: '15px',
       color: 'black',
     }}>

<div>
        <h4>About Us</h4>
    <p>Our carefully curated range includes state-of-the-art fitness equipment, strength training gear, yoga and pilates essentials, and everything in between. Whether you're setting up your home gym, leveling up your workout routine, or exploring new ways to stay active, weve got the tools you need to succeed.</p>

<p>
  
</p>
     
    </div>

     </div>
     </div>
     </div>

  )
}

export default ContactUs