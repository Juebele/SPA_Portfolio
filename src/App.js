import React from 'react';

// First we import our Alert component from the components folder
import Header from './components/Header';
import Footer from './components/Footer'

// We create a couple variables which contain strings
const message = 'Welcome to my portfolio!';
const alertType = "info";
const githubLink = "https://github.com/Juebele/";

// We then return Alert, we pass it a prop, "message" set to the value of our message variable
// We also pass a type prop to the component set to the value of "alertType"
function App() {
  return (
    <div>
  <Header type={alertType} message={message} />
  <Footer type={alertType} githubLink={githubLink} />
  </div>
  )
}

export default App;
