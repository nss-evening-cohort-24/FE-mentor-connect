/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

// function show the authenticated user's profile info
export default function UserCard() {
  const { user } = useAuth();

  return (
    <>
      <Card>
        <img src={user.photoURL} alt="user" width="100px" height="100px" className="user-display-photo" />
        <Card.Body>
          <h6 className="user-info"><b>Username:</b> {user.displayName}</h6>
          <h6 className="user-info"><b>User E-mail: </b>{user.email}</h6>
          <h6 className="user-info"><b>Last Login: </b>{user.metadata.lastSignInTime}</h6>
        </Card.Body>
      </Card>
    </>
  );
}
