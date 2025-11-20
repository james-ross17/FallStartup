# Door to Door Sales Tracker

**Author:** James Ross

**Live URL:** [startup.jamesross.click](https://startup.jamesross.click)

A simple web application for tracking progress and results during door-to-door sales or canvassing efforts. This tool helps individuals and teams stay organized by digitally recording which houses have been visited and the outcome of each interaction.

---
## Deliverable: React Conversion (Phase 1)

This deliverable focused on converting the original static HTML/CSS website into a single-page application (SPA) using the React framework.

### What I Did
* **Initialized Project:** Set up a modern frontend development environment using Vite.
* **Component Conversion:** Converted all static HTML pages (`home.html`, `routes.html`, etc.) into reusable React components (`.jsx`).
* **Client-Side Routing:** Implemented `react-router-dom` to handle navigation between pages without requiring a full page reload. This creates a faster, smoother user experience.
* **Application Shell:** Created a main `App.jsx` component that serves as the primary layout, including a persistent header, navigation bar, and footer.
* **Deployment:** Configured and used a shell script (`deployReact.sh`) to automatically build the production version of the application and deploy it to the production server.

### Technologies Used
* React
* Vite
* React Router (`react-router-dom`)
* JavaScript (ES6)
* Bootstrap
* HTML5 / CSS3

### What I Learned
* I learned the fundamental difference between a traditional multi-page website and a single-page application (SPA). With the router, the page content changes dynamically instead of the browser requesting a new HTML file from the server for every click.
* I gained hands-on experience with the component-based architecture of React. Breaking the UI down into small, manageable pieces like `Home.jsx` and `About.jsx` makes the code much more organized.
* I spent a lot of time troubleshooting build errors related to file paths and `import`/`export` statements. This taught me how important details like case sensitivity and the `export` keyword are in a modern JavaScript project.

---
## Future Enhancements

* Add dynamic functionality and state management to make the forms and trackers interactive.
* Connect the frontend to a backend service to save and retrieve user data.
* Implement user login and authentication.

## 🚀 Startup React Phase 2: Interactivity

For this deliverable, I added reactivity to my existing React components.

- [x] **Multiple react components that implement or mock all app functionality (70 pts):**
    - I implemented a mock login system. The `Login` component now uses `useState` to capture form input and calls a function passed down from `App.jsx` to update the global authentication state.
    - I implemented mock data loading for the "Client Database." The `Client` component now uses `useEffect` to load a hard-coded array of client data into state, which is then rendered in a table. This mocks the functionality of fetching from a database.
    - The navigation bar in `App.jsx` is now reactive, conditionally rendering the "Routes" and "Client" links based on the `authState` variable.

- [x] **React useState and useEffect hooks (30 pts):**
    - **`useState`**: I used `useState` in `App.jsx` to "lift state up" and manage the global `userName` and `authState`. I also used `useState` in `login.jsx` to manage the local state of the form inputs.
    - **`useEffect`**: I used `useEffect` in `Client.jsx` with an empty dependency array (`[]`) to simulate a one-time data fetch when the component mounts, populating the `clients` state.

## 🚀 Startup Service

For this deliverable, I successfully transitioned the application to a full-stack architecture using Node.js and Express.

- [x] **Node.js/Express HTTP service:** I created a backend service in the `service/` directory that is run by PM2 and listens on port 5000.
- [x] **Frontend served by Express:** The service uses `express.static('public')` to serve the bundled React application.
- [x] **Frontend calls 3rd party service:** My `About` component fetches a random quote from `httpss://api.quotable.io/random` when it loads.
- [x] **Backend provides service endpoints:** My service provides authentication endpoints (`/api/auth/create`, `/api/auth/login`) and application endpoints (`/api/clients`, `/api/client`).
- [x] **Frontend calls service endpoints:** The `Login` component calls the auth endpoints, and the `Client` component uses `fetch` to get and add client data via the application endpoints.
- [x] **Supports auth:** The service implements secure user registration, login, and restricted access to client data using `bcrypt` for password hashing and secure cookies for session management.
