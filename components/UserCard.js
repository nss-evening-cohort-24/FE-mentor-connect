/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

// function show the authenticated user's profile info
export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div id="profile" className="user-page">
      <img src={user.photoURL} alt="user" width="100px" height="100px" className="user-display-photo" />
      <div className="infos"><br />
        <h3 className="user-info"><b>Username:</b> {user.displayName}</h3>
        <h6 className="user-info"><b>User E-mail: </b>{user.email}</h6>
        <h6 className="user-info"><b>Last Login: </b>{user.metadata.lastSignInTime}</h6>
      </div>
    </div>
  );
}
