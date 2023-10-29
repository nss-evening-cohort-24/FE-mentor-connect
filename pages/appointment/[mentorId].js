import React from 'react';
import { useRouter } from 'next/router';
import AppointmentForm from '../../components/forms/AppointmentForm';

export default function BookAppointment() {
  const router = useRouter();
  const { mentorId } = router.query;

  return (
    <AppointmentForm mentorId={mentorId} />
  );
}
