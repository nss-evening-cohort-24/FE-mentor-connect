/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      id="signin"
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <h1>Hello!</h1>
      <p>Click the button below to enter Mentor Connect!</p><br />
      <div id="logo">
        <img src="/logo2.png" alt="icon" className="nav-logo" width="320" height="200" />
      </div><br /><br />
      <Button type="button" size="medium" id="login-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
