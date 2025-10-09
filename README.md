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
