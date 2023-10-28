/* eslint-disable @next/next/no-img-element */
import { Card, Button } from 'react-bootstrap';
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div id="profile" className="user-page">
      <Card>
        <img src={user.photoURL} alt="user" width="100px" height="100px" className="user-display-photo" />
        <Card.Body>
          <h3>My Profile:</h3><br />
          <h6 className="user-info"><b>Username:</b> {user.displayName}</h6>
          <h6 className="user-info"><b>User E-mail: </b>{user.email}</h6>
          <h6 className="user-info"><b>Last Login: </b>{user.metadata.lastSignInTime}</h6>
        </Card.Body>
      </Card>
      <br />
      <div id="apts">
        <Card>
          <div id="clock">
            <img src="/clock.jpg" alt="icon" className="nav-logo" width="155" height="135" />
          </div>
          <Card.Body>
            <h3>My Appointments:</h3><br />
            <h6>Mentor Name</h6>
            <h6>Category</h6>
            <h6>Date/Time</h6><br />
            <Button id="edit">EDIT</Button>
            <Button id="memdel" className="m-2">
              DELETE
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
