"use client";

import React, { useState, FormEvent } from 'react';

import './LoginPage.css';

const LoginPage: React.FC = () => {

  return(
    <div className="login-page">
      <div className="navbar"> 
          
        <div className="nav-links">
            <div className="left-nav-links">
              <img src="/company-logo.png" alt="Ursal Rice Milling Services Logo" className="company-logo" />
                
              <a href="/">Ursal Rice Milling Services</a>
            </div>
            <div className="center-nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
           
        
        </div>

    
      </div>
      <div className="content-container">
        
         
          <div className="login-container">
            
            <h1>Login</h1>
            <div className="user-icon">
              <img src="/userlogo.svg" alt="User Icon" className="user-icon-image" />
            </div>
            <div className="login-forms">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  placeholder="Password"
                />
                <button type="submit">Login</button>
              </form>
              <div className="signup-link">
                <p>Don't have an account? <a href='/Signup'> Sign In </a> </p>
              </div>
                  </div>
                </div>
        
      
            </div>
          </div>

      
       
      
    
      
  )
}


export default LoginPage;

