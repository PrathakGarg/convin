# Video Library App

This is a video library application where users can create, edit, delete, and organize their videos under different buckets. The application is built using React, Redux, React Router, Ant Design, and Redux Thunk middleware.

# Functionality
The application has the following features:

1. Users can create, edit, and delete a card, which contains a name and a video/mp3 link.
2. Each card can be created under a bucket. Users can create new buckets and name them according to their choice.
3. Users can move a card from one bucket to another by dragging and dropping the card.
4. On clicking on a card, a modal with an iframe will open, which starts playing the video.
5. Users can delete a single card or multiple cards under a single bucket at once.
6. The application has a separate tab called history, which lists the mp3/mp4 links that the user has played, including the card name, the link, and the time it was played.

# Tech Stack
The application uses the following technologies:

- React - a JavaScript library for building user interfaces
- Redux - a predictable state container for JavaScript apps
- React Router - a routing library for React
- Ant Design - a UI library for React
- Redux Thunk - a middleware for Redux to handle asynchronous actions

# Setup
To run the application, follow these steps:

1. Clone the repository using the following command:
```
git clone https://github.com/PrathakGarg/convin.git
```

2. Install the dependencies using the following command:

```
npm install
```

3. Start the development server using the following command:

```
npm run dev
```

4. Open the application in your browser at http://localhost:5173.

# Folder Structure
- public/ - contains static files that are served directly by the web server
- src/ - contains the source code for the application
- assets/ - contains the assets used in the application, such as images and videos
- components/ - contains the reusable UI components used in the application
- pages/ - contains the pages that make up the application
- redux/ - contains the Redux-related code for the application, such as actions, reducers, and selectors
- utils/ - contains utility functions used throughout the application
- App.js - the main component that renders the application
- index.js - the entry point for the application

# Conclusion
The Video Library App is a simple yet useful application for organizing and managing your video collection. It provides a clean and user-friendly interface, along with the ability to customize your buckets and move your cards between them. With the help of Redux and other technologies, it provides a seamless user experience.
