// import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// Import Components Here 
import Signup from './Components/signup';
import Signin from './Components/Signin';
import Addfitnessproduct from './Components/Addfitnessproducts';
import Getfitnessproducts from './Components/Getfitnessproducts';
import Makefitnesspayment from './Components/Makefitnesspayment';
import NotFound from './Components/Nothing';
import Index from './Components/home';
import ContactUs from './Components/Contact us';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Chat from './Components/Chatbox';


// Bootstrap importation 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    
    <Router>
      <Navbar/>
      <div className="App">
        
      {/* <header className="App-header" >
      <Link to="/" className="navbar-brand fw-bolder">NUTRITION & FITNESS</Link>
      </header> */}
      

  
<Routes>
  {/* Route to components  */}
    <Route path='/' element={<Index/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/addfitnessproducts' element={<Addfitnessproduct/>}/>
    <Route path='/getfitnessproducts' element={<Getfitnessproducts/>}/>
    <Route path='/makefitnesspayment' element={<Makefitnesspayment/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='ch' element={<Chat/>}/>
   
    
    
    



</Routes>
<footer className=" text-dark text-center" >
   <b>Developed by Germain. &copy;2025. Allrights Reserved</b>
</footer>
    </div>

    </Router>

  );
}
export default App;
