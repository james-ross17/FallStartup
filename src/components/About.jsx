import React from 'react';

export function About() {
  return (
    <main>
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

      <div>
        <h3>About Door-to-Door Tracker</h3>
        <p>
          Welcome to Door-to-Door Tracker — a simple way to keep track of your progress while knocking doors. Whether you’re selling, campaigning, delivering, or visiting, staying organized is key.
          This application helps you:<br />
          📍 Record which houses you’ve visited<br />
          ✅ Mark results (interested, not home, follow-up)<br />
          📊 See your daily and overall progress<br />
          👥 Track team performance (coming soon)<br />
          Our goal is to remove the hassle of pen-and-paper tracking and replace it with a clear, easy-to-use tool. With placeholders for login, real-time updates, and saved history, this app is being built to support both individuals and teams in the field.
        </p>
        <p>
          Door-to-Door work can be tough — we're here to make the tracking part easy.
        </p>
      </div>
    </main>
  );
}