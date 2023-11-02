/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import AppointmentCard from '../components/AppointmentCard';
import { getAppointments } from '../api/appointmentData';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const [appointments, SetAppointments] = useState([]);
  const { user } = useAuth();

  const getAllAppointments = () => {
    getAppointments().then(SetAppointments);
  };

  useEffect(() => (
    getAllAppointments()
  ), []);

  return (
    <div id="profile-pg">
      <div id="left">
        <div id="profile" className="user-page">
          <h3 className="serif">Welcome,<br /> {user.displayName}</h3>
        </div>
        <div id="prof2">
          <UserCard />
        </div>
      </div>
      <div id="right">
        <div id="apt-container">
          <h3 className="serif">My Appointments</h3>
        </div>
        <div id="apts">
          {appointments.map((apt) => (
            <AppointmentCard appointmentObj={apt} key={apt.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
