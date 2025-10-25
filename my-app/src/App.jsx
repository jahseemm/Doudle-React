/* Routing and linking between websites */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/auth/signIn';
import SignUp from './Pages/auth/signUp';

/* Assets and CSS Stuffs*/
import { useState } from 'react';
import './App.css';
import './Css/button.css';
import './Css/main.css';
import './Css/position.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Optional: redirect root to sign-in */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;