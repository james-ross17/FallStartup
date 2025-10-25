import React, { useState } from 'react';

// Read the 'onAuthChange' function from the props (passed from App.jsx)
export function Login({ onAuthChange }) {
  
  // Add local state to track the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // This function runs when the "Login" button is clicked
  function handleLogin() {
    // This is a mock login. For now, it just checks if an email was typed.
    if (email) {
      // This calls the function in App.jsx and passes the email up
      onAuthChange(email, 'Authorized');
    }
  }

  // This is the HTML from your old index.html, converted to JSX
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome to the Door to Door Sales Tracker</h1>
      
      {/* We removed the <form> tag since React is handling the click,
        not a form submission.
      */}
      <div>
        <div>
          <span>@</span>
          {/* This input is now controlled by React state */}
          <input 
            type="text" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <span>🔒</span>
          {/* This input is also controlled by React state */}
          <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        
        {/* This button now calls our handleLogin function */}
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button">Create</button>
      </div>
    </main>
  );
}