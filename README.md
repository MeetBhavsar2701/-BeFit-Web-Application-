# BeFit - Your Interactive Fitness Guide

BeFit is an interactive fitness web application designed to make workout planning easy and engaging. Instead of browsing long lists, users can simply click on a muscle in an SVG human body model to find exercises. This project is for anyone looking for a user-friendly way to plan their fitness routines, with features catering to both men and women and various equipment availability.

## ✨ Features

* **Interactive Body Model:** Click on different muscle groups on an SVG human body (both male and female views) to get targeted exercises.
* **Gender-Specific Content:** The app provides workout videos tailored for both male and female users.
* **Equipment-Based Filtering:** Select from a range of equipment like Dumbbells, Barbells, Kettlebells, or even Bodyweight to find suitable workouts.
* **Video Demonstrations:** Each exercise comes with an embedded YouTube video to guide you through the correct form and technique.
* **Workout Routines:** Pre-defined routines for different fitness goals like Full Body, Strength Training, and Cardio.
* **User Authentication:** Includes UI for Sign Up and Login functionality.
* **Theme Customization:** Switch between light and dark modes for comfortable viewing.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need a modern web browser. The project uses Tailwind CSS, but the compiled CSS file is included, so no installation is required to simply run it.

### Running the Application

1.  Clone the repo:
    ```sh
    git clone [https://github.com/YOUR_USERNAME/BeFit.git](https://github.com/YOUR_USERNAME/BeFit.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd BeFit/dist
    ```
3.  Open the `BeFit2.0.html` file in your browser to view the application.

### Development

If you want to make changes to the styles:
1.  Make sure you have Node.js and npm installed.
2.  Install Tailwind CSS:
    ```sh
    npm install -D tailwindcss
    ```
3.  Run the Tailwind CLI to watch for changes and rebuild your CSS:
    ```sh
    npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
    ```
    *(Note: You will need to create the `src/input.css` file to contain your Tailwind directives if it doesn't exist.)*

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework.
* **JavaScript** - For interactivity, DOM manipulation, and application logic.

---

## ⚠️ Limitations

This project is currently a demonstration. Please be aware of the following limitations:

* **Limited Content:** The library of exercises and workout videos is not exhaustive. Only a few muscles and equipment types have associated videos for demo purposes.
* **No Backend:** The user signup and login forms are front-end only and do not connect to a database. No user data is actually stored.

---

## 🔮 Future Scope

* **Expand Exercise Library:** Integrate a comprehensive database of exercises covering all muscle groups and equipment types.
* **Full Backend Integration:** Implement a full-featured backend with a database to manage user accounts, save preferences, and track progress.
* **Personalized Workout Plans:** Generate custom workout plans based on user goals, fitness levels, and available time.
* **Progress Tracking:** Add features for users to log their workouts, view their history, and see performance analytics.

---

## 📬 Contact

Meet Bhavsar - meet27011990@gmail.com

Project Link: [https://github.com/YOUR_USERNAME/BeFit](https://github.com/MeetBhavsar2701/-BeFit-Web-Application-)
