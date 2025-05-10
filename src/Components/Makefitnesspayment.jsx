import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Makepayment = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

    // Get user from localStorage (or however you store it)
    const user = JSON.parse(localStorage.getItem('user'));


  const { product } = useLocation().state || {};
  const image_path = 'https://germain254.pythonanywhere.com/static/images/';

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait as we process your request...');
    setError('');
    setSuccess('');

    try {
      const data = new FormData();
      data.append('phone', phone);
      data.append('amount', product.product_price);

      const response = await axios.post(
        'https://germain254.pythonanywhere.com/api/mpesa_payment',
        data
      );

      setLoading('');
      setSuccess('✔️ Complete the payment on your phone.');
    } catch (error) {
      setLoading('');
      setError('❌ ' + error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage:'',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{
          width: '90%',
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          color: 'white',
        }}
      >
        <h2 className="mb-4 text-dark">Payment</h2>

        <img
          src={image_path + product?.product_photo}
          width="100%"
          alt="product"
          className="rounded mb-3 shadow-sm"
        />

        <h3 className="text-success">{product?.product_name}</h3>
        <p className="text-dark">{product?.product_description}</p>
        <h5 className="text-danger mb-4">Ksh. {product?.product_price}</h5>

        {/* Messages */}
        {loading && <div className="text-warning mb-2">{loading}</div>}
        {success && <div className="text-success mb-2">{success}</div>}
        {error && <div className="text-danger mb-2">{error}</div>}

        <form onSubmit={submit}>
          <input
            type="number"
            placeholder="Enter Phone (+254XXXXXXXXX)"
            className="form-control text-center mb-3"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
                 {user && <button className="btn btn-dark w-100">Pay Now</button>} 
        </form>
      </div>
    </div>
  );
};

export default Makepayment;
