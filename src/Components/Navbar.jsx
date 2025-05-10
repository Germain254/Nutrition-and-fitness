import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
 
  // 🔽 ADDED: Manage user state and navigation
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For redirection
 
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
  }, []);
  // 🔼 END ADDED
 
  // 🔽 ADDED: Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setUser(null); // Clear user state
    navigate("/signin"); // Redirect to login
  };
  // 🔼 END ADDED
  return (
    <section className="container-fluid row ">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md navbar-light bg-light" style={{
          // background:"linear-gradient(90deg,rgb(129, 228, 134),rgb(32, 212, 41))",
          // fontFamily:"fantasy",
          // fontSize:"18px",

        }}>
          <a href='/' className="navbar-brand">
            <b className="text-success " style={{fontSize:"25px"}}>Nutrition <span className="text-dark">& Fitness</span></b>
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
 
          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav">
            <Link to="/" className="nav-link">
                Home
              </Link>
         
              <Link to="/getfitnessproducts" className="nav-link">
            Products
              </Link>
               
 
                <Link to="/addfitnessproducts" className="nav-link">
                Add Products
              </Link>

              <Link to="/ch" className="nav-link">
            Talk to a specialist 
              </Link>

              <Link to="/contactus" className="nav-link">
                Our Community
              </Link>

                
              
            </div>
          

            <div className="dropdown navbar-nav ms-auto">
  <button
    className="btn btn-dark dropdown-toggle"
    id="userDropdown"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {user ? (user.username || user.email) : 'Options'}
  </button>

  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
    {user ? (
      <>
        <li>
          <span className="dropdown-item-text">
            Logged in as: {user.username || user.email}
          </span>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </>
    ) : (
      <>
        <li><Link to="/signin" className="dropdown-item">Sign In</Link></li>
        <li><Link to="/signup" className="dropdown-item">Sign Up</Link></li>
      </>
    )}
  </ul>
</div>


          </div>
        </nav>
      </div>
    </section>
  );
};
 
export default Navbar;