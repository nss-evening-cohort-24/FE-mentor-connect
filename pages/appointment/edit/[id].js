import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAppointment } from '../../../api/appointmentData';
import AppointmentForm from '../../../components/AppointmentForm';

// FUNCTION TO EDIT APTS
export default function EditAppointment() {
  const [editAppointment, setEditAppointment] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleAppointment(id).then(setEditAppointment);
  }, [id]);

  return (
    <>
      <AppointmentForm appointmentObj={editAppointment} />
    </>
  );
}
