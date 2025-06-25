🏃‍♂️ Marathon Management System
A comprehensive full-stack web application for organizing, exploring, and participating in marathon events.

🚀 Live Demo
[https://marathon-management-event.surge.sh](https://marathon-management-event.surge.sh)


## 📸 Screenshots

### 🖥️ Project UI Previews

![A glimpse of the homepage, highlighting featured marathons](https://i.ibb.co/LhHPd6V9/Screenshot-2025-06-25-113037.png)
<br/>

![Detailed view of a specific marathon ](https://i.ibb.co/WvkpHKG6/Screenshot-2025-06-25-113103.png)
<br/>

![Dashboard](https://i.ibb.co/n8gBpXbp/Screenshot-2025-06-25-113114.png)
<br/>

![Applied Marathon](https://i.ibb.co/LhCWkr6R/Screenshot-2025-06-25-113133.png)



🌟 About the Project
This project is a robust Marathon Management System designed to streamline the experience for both marathon organizers and participants. It offers a seamless platform where event organizers can easily add and manage marathon events, while participants can effortlessly browse, apply for, and keep track of their chosen marathons.

Built with the powerful MERN stack (MongoDB, Express.js, React, Node.js), this application demonstrates my full-stack development capabilities. The frontend is crafted with React for dynamic user interfaces and styled beautifully with Tailwind CSS for a modern, responsive design. Firebase is integrated to provide secure and efficient user authentication (Login/Logout), ensuring a smooth and protected user experience.

This system is a testament to my ability to develop scalable, user-centric web applications from concept to deployment.

✨ Features
User Authentication:

Secure Login and Logout functionalities for registered users.

User-friendly Registration process.

Leverages Firebase Authentication for reliable and scalable user management.

Marathon Event Management (Admin/Organizer):

Dedicated interface for authorized users to add new marathon events with comprehensive details (name, date, location, description, capacity, etc.).

[If implemented: Ability to view, edit, or delete existing marathon events].

Marathon Application:

Participants can browse a list of available marathons.

Seamless process for users to apply to their desired marathon events.

Featured Marathons Section:

A prominent section on the homepage to highlight popular, upcoming, or recommended marathon events, enhancing user engagement.

Responsive Design:

Built with Tailwind CSS, ensuring the application looks and functions flawlessly across all devices, from mobile phones to large desktop screens.

Robust Backend:

Developed with Node.js and Express.js to provide efficient and secure RESTful APIs.

Handles all data operations, user requests, and business logic.

Persistent Data Storage:

Utilizes MongoDB as the NoSQL database for storing all marathon event details, user information, and application data.

🚀 Technologies Used
Frontend Development:HTML ,CSS. TAILWIND CSS, JAVASCRIPT

Backend Development:NODE JS, EXPRESS JS

Database: MONGODB,

Authentication & Deployment (or other services):Firebase

⚙️ Installation and Local Setup
To get a local copy of this project up and running on your machine, follow these steps.

Prerequisites:

Node.js (LTS version recommended)

npm (comes with Node.js) or Yarn

MongoDB (running locally or a connection string to a MongoDB Atlas cluster)

1. Clone the repository:

git clone https://github.com/[Your_GitHub_Username]/[Your_Repository_Name].git
cd [Your_Repository_Name]


(Replace [Your_GitHub_Username] and [Your_Repository_Name] with your actual details.)

2. Backend Setup:

Navigate to the backend directory:

cd server # or api, or backend (adjust if your backend folder has a different name)


Install backend dependencies:

npm install # or yarn install


Create a .env file in the server directory and add your environment variables.
(Example values below; replace with your actual keys and strings)

MONGO_URI=mongodb+srv://your_username:your_password@clustername.mongodb.net/marathon_db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key # Use a strong, random string
PORT=5000 # Or your preferred port for the backend API


Start the backend server:

npm start # or node server.js (or whatever your main server file is named)


The backend API will typically run on http://localhost:5000.

3. Frontend Setup:

Navigate to the frontend directory:

cd ../client # or app, or frontend (adjust if your frontend folder has a different name)


Install frontend dependencies:

npm install # or yarn install


Create a .env file in the client directory and add your frontend environment variables, especially for Firebase configuration.

REACT_APP_FIREBASE_API_KEY=AIzaSy...
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=1:..
REACT_APP_API_URL=http://localhost:5000/api # This should point to your backend API


(Ensure REACT_APP_API_URL points to where your backend is running, whether local or deployed.)

Start the frontend development server:

npm start # or yarn start


The frontend application should now be accessible at http://localhost:3000 (or another port as indicated in your console).

🛣️ Future Enhancements
Payment Gateway Integration: Implement secure payment processing for marathon registration fees.

User Dashboards: Personalized dashboards for participants to view their applied marathons, results, and manage profiles.

Admin Analytics: A dedicated admin dashboard with comprehensive statistics and insights into marathon registrations and user activity.

Search and Filtering: Advanced search capabilities and filtering options for marathons by date, location, type, etc.

Notification System: Email or in-app notifications for registration confirmations, event updates, and reminders.

Mapping Integration: Display marathon routes using mapping APIs (e.g., Google Maps, Mapbox).

🤝 Contributing
Contributions are always welcome! If you have suggestions, bug reports, or want to contribute to the project, please feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📧 Contact
Feel free to connect with me for any questions, feedback, or collaborations!

email:[mahmudulhasannayemssnic@gmail.com](mahmudulhasannayemssnic@gmail.com)
