import React, { useState } from 'react';

export default function Login({ onAuthChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (email) {
      onAuthChange(email, 'Authorized');
    }
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome to the Door to Door Sales Tracker</h1>
      <div>
        <div>
          <span>@</span>
          <input 
            type="text" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <span>🔒</span>
          <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button">Create</button>
      </div>
    </main>
  );
}