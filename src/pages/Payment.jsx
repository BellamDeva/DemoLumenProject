import React from 'react';

const Payment = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Payment Details</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cvc">CVC</label>
          <input type="text" id="cvc" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
