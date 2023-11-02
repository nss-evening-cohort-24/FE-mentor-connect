/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import AppointmentCard from '../components/AppointmentCard';
import { getAppointments } from '../api/appointmentData';

export default function Profile() {
  const [appointments, SetAppointments] = useState([]);
  const getAllAppointments = () => {
    getAppointments().then(SetAppointments);
  };

  useEffect(() => (
    getAllAppointments()
  ), []);

  return (
    <><br />
      <div id="profile" className="user-page">
        <h3>My Profile:</h3><br />
      </div>
      <div id="prof2">
        <UserCard />
      </div><br /><br />

      <div id="apt-container">
        <h3>My Appointments:</h3>
      </div>
      <div id="apts">
        {appointments.map((apt) => (
          <AppointmentCard appointmentObj={apt} key={apt.id} />
        ))}
      </div>
    </>
  );
}
