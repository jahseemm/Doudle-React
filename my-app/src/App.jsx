import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Css/button.css';
import './Css/main.css';
import './Css/position.css';

function App() {
  return (
    <>
      {/* Background */}
      <div className="top-left" style= {{top:"0", left:"0"}}>
        <div className="background">
          <img src="/imgs/bkg4.png" alt="Background" />
        </div>
      </div>
      

      <div className="bkgd-dark"></div>

      {/* Main Content */}
      <div className="top-left" style={{top:'-22px', left:'0'}}>
        <div className="flex-row-panel" style={{ gap: '60px' }}>
          {/* Left Panel: Welcome */}
          <div className="panel" style={{ position: "relative", left: '0', backgroundColor: "transparent"}}>
            <div className="top-left" style={{position:"relative", marginLeft:"1px", textAlign:"left"}}>
              <div className="normal-text"> 
                <h1 style={{ color: 'aliceblue', fontSize: '40px' }}>Welcome to Doudle</h1>
                <h2 style={{ color: 'aliceblue', marginTop: '-16px' }}>Let's finish TODO your Day</h2>
                <p style={{ color: 'aliceblue', lineHeight: '1.5', fontWeight: 'lighter', marginTop:"-10px" }}>
                  A place to manage your tasks, from the simplest to the most complex.
                  <br /> All with A.I. assistance
                </p>
              </div>
            
            

            {/* Social Media Icons */}

              <div style={{ display: 'flex', gap: '10px', position: 'relative', marginTop: '-10px', marginLeft:"-10px" }}>
                <a href="https://www.facebook.com" className="button1" style={{ width: '26px', height: '26px', padding: '7px', backgroundColor: 'transparent' }}>
                  <img style={{ width: '40px' }} src="/imgs/icn/facebk.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" className="button1" style={{ width: '34px', height: '34px', padding: '3px', backgroundColor: 'transparent' }}>
                  <img style={{ width: '44px' }} src="/imgs/icn/insta.png" alt="Instagram" />
                </a>
                <a href="https://www.x.com" className="button1" style={{ width: '27px', height: '27px', padding: '7px', backgroundColor: 'transparent' }}>
                  <img style={{ width: '44px', borderRadius: '0' }} src="/imgs/icn/twitter.png" alt="X (Twitter)" />
                </a>
                <a href="https://www.youtube.com" className="button1" style={{ width: '34px', height: '34px', padding: '3px', backgroundColor: 'transparent' }}>
                  <img style={{ width: '44px' }} src="/imgs/icn/youtube.png" alt="YouTube" />
                </a>
              </div>

              
              <p style={{ color: 'aliceblue', fontWeight: 'lighter', fontSize: '13px', marginTop: '1px' }}>
                Follow us on Social Media
              </p>
            </div>
          </div>

          {/* Right Panel: Sign-In */}
          <div className="panel" style={{ position: 'relative', backgroundColor: 'transparent', top:"20px"}}>
            <h1 className="center-text" style={{ marginTop: '10px', color: 'aliceblue', fontSize: '40px' }}>
              Sign-In
            </h1>

            <form id="login-form" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '25px', textAlign:"left" }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '5px' }}>
                <label htmlFor="email" style={{ color: 'aliceblue', fontWeight: 'lighter' }}>
                  Email Address
                </label>
                <input type="email" id="login-email" required style={{ height: '25px' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '5px' }}>
                <label htmlFor="password" style={{ color: 'aliceblue', fontWeight: 'lighter' }}>
                  Password
                </label>
                <input type="password" id="login-pass" required style={{ height: '25px' }} />
              </div>
            </form>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <button id="login-button" className="button1" style={{ width: '100px', height: '50px', fontWeight: '500' }}>
                Sign In
              </button>

              <p style={{ color: 'aliceblue', fontWeight: 'lighter' }}>or use:</p>
              <button id="login-google" className="button1 btn-white" style={{ width: '100px', height: '50px' }}>
                <img src="/imgs/icn/google.png" style={{ width: '65px', margin: '6px 0' }} alt="Google" />
              </button>
            </div>

            <p style={{ color: 'aliceblue', fontWeight: 'lighter', fontSize: '14px', marginTop:"20px" }}>
              Lost your password?
              <a href="Pages/auth/lostpass.html" style={{ color: '#00bfff', textDecoration: 'none' }}>
                Change Password
              </a>
            </p>

            <p style={{ color: 'aliceblue', fontWeight: 'lighter', fontSize: '14px', marginTop: '20px' }}>
              No Account?
              <a href="Pages/auth/sign-up.html" style={{ color: '#00bfff', textDecoration: 'none' }}>
                Sign-Up
              </a>
            </p>

            <div className="center-text" style={{ marginTop: '20px', fontSize: '14px', color: 'aliceblue', fontWeight: 'lighter', lineHeight: '1.5px' }}>
              By "Signing in", you agree to our{' '}
              <a href="Pages/auth/terms.html" style={{ color: '#00bfff' }}>Terms of Service</a> |{' '}
              <a href="Pages/auth/privacy.html" style={{ color: '#00bfff' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;