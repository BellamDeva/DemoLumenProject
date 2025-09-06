import React from 'react';

const Plans = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Plans</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Pro Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
