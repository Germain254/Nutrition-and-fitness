import React from 'react'
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <button className="btn btn-outline-dark">Home</button>
    </div>
  )
}

export default NotFound