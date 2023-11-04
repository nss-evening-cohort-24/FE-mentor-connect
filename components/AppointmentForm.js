import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createAppointment, updateAppointment } from '../api/appointmentData';
import { checkUser } from '../utils/auth';
import { getSingleMentor } from '../api/mentorData';

const initialState = {
  dateTime: '',
};

export default function AppointmentForm({ mentorId, appointmentObj }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState({ ...initialState, mentorId });
  const router = useRouter();
  const [userData, setUser] = useState({});
  const [mentor, setMentor] = useState({});

  useEffect(() => {
    getSingleMentor(mentorId).then(setMentor);
    checkUser(user.uid).then((data) => {
      setUser(data);
    });
    if (appointmentObj.appointmentId) setFormInput(appointmentObj);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointmentObj.id) {
      const patchPayload = { ...formInput, appointmentId: appointmentObj.id };
      updateAppointment(patchPayload).then(() => router.push('/profile'));
    } else {
      const payload = { ...formInput, userId: userData.userId, DateTime: formInput.dateTime };
      createAppointment(payload).then((data) => {
        const patchPayload = { ...formInput, appointmentId: data.id };
        updateAppointment(patchPayload).then(() => router.push('/profile'));
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Make an appointment with {mentor.firstName} {mentor.lastName}</h2><br />
        <Form.Group className="mb-3">
          <Form.Label>Choose Date:</Form.Label>
          <Form.Control
            type="dateTime-local"
            name="dateTime"
            value={formInput.dateTime}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" id="createapt">{appointmentObj.id ? 'Update' : 'Create'} Appointment
        </Button>
      </Form>
    </>
  );
}

AppointmentForm.propTypes = {
  appointmentObj: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    notes: PropTypes.string,
    DateTime: PropTypes.string,
    appointmentId: PropTypes.number,
    UserId: PropTypes.number,
    id: PropTypes.number,
  }),
  mentorId: PropTypes.string.isRequired,
};
AppointmentForm.defaultProps = {
  appointmentObj: initialState,
};
