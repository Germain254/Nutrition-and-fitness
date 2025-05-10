import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Index = () => {
  return (
    <div className='container '>
       
<h1 className='text-success text-center fw-bolder'>Nutrition & Fitness</h1>
<p className='text-center'>Your One-Stop Destination for getting stronger and healthy with Calisthenics. </p>

<section className="row my-5">
  {/* <!-- Left Column --> */}
  <div className="col-md-6 text-center">
    <h2 className="text-center fw-bolder">Fitness Equipment</h2>
       
        <iframe src="/getfitnessproducts#fitnessproducts" height="700px" width="100%" className="border" ></iframe>

  </div>

  {/* <!-- Right Column --> */}
  <div className="col-md-6 d-flex flex-column justify-content-center">
    <h3 className="section-title text-start ">Fitness Equipment</h3>
    <ul>
      <li>High-quality Yoga mats, resistance bands and exercise accesories.</li>
      <li>Strength training gear including  kettlebells, and resistance bands.</li>
      <li>Yoga and pilates essentials: mats, blocks, and straps.</li>
      <li>Exclusive bundles and special offers.</li>
    </ul>
    <div className="text-center mt-3">
      <a href="/getfitnessproducts" className="btn btn-outline-success">
        <h4 className="mb-0">See more Fitness Equipment</h4>
        <p className="text-dark">Train your body with the right equipment.</p>
      </a>
    </div>
  </div>
</section>
<div className="content-block">
                <h3 className="section-title text-start fw-bolder">Nutrition</h3>
                <ul className="text-start">
                    <li>We offer complete guidelines on how to consume healthy food.</li>
                    <li>Fast, reliable and easy feedback.</li>
                    <li>Trusted by fitness enthusiasts worldwide.</li>
                    <li>Free nutritional advice. </li>
                    <li>Live chat with a specialist.💬</li>

                </ul>
            </div>

<div className="content-block">
                <h3 className="section-title text-start fw-bolder">Why Choose Nutrition & Fitness</h3>
                <ul className="text-start">
                    <li>Trusted by fitness enthusiasts worldwide.</li>
                    <li>Expert customer support to guide you every step of the way.</li>
                    <li>Fast, reliable shipping 🚚.</li>
                    <li>Affordable pricing with regular discounts and promotions.</li>
                    <li>Free nutritional advice </li>

                </ul>
            </div>

            <div className="content-block">
                <h3 className="section-title fw-bolder">Join Our Community</h3>
                <p></p>
            </div>
    
  
        <p className=' text-success'>Ready to Start Your Fitness Journey? Visit our online store today and take the first step towards a healthier you!</p>


    </div>
    
  )
}

export default Index