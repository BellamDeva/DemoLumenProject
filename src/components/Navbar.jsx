import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1.2rem'
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <a href="/" style={linkStyle}>TeleCommunication</a>
      </div>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/signup" style={linkStyle}>Sign Up</a>
        <a href="/dashboard" style={linkStyle}>Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
