import React from 'react';

export function Client() {
  return (
    <body>
    <header>
      <h1>Door to Door Sales Tracker<sup>&reg;</sup></h1>
      <img src="door.jpeg" alt="Door to Door Sales Tracker Logo" />
      <nav>
        <menu>
          <li><a href="index.html">Home</a></li>
          <li><a href="routes.html">View Routes</a></li>
          <li><a href="client.html">Record client</a></li>
          <li><a href="about.html">About</a></li>
        </menu>
      </nav>
      <div className="user-display">Current User: James Ross</div>

      <hr />
    </header>

    <main>
        <h1>Client Database</h1>
        <button>Record New Client</button>
    </main>
  </body>
  );
}