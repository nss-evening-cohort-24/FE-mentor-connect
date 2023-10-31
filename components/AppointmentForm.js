import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createAppointment, updateAppointment } from '../api/appointmentData';
import { checkUser } from '../utils/auth';

const initialState = {
  dateTime: '',
};

export default function AppointmentForm({ mentorId, appointmentObj }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState({ ...initialState, mentorId });
  const router = useRouter();
  const [userData, setUser] = useState({});

  useEffect(() => {
    checkUser(user.uid).then((data) => {
      console.log('USER DATA: ', data);
      setUser(userData);
    });
    if (appointmentObj.appointmentId) setFormInput(appointmentObj);
  }, [appointmentObj, user, userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointmentObj.appointmentId) {
      updateAppointment(formInput).then(() => router.push('/profile'));
    } else {
      const payload = { ...formInput, userId: userData.userId };
      createAppointment(payload).then((data) => {
        const patchPayload = { appointmentId: data.id };
        updateAppointment(patchPayload).then(() => router.push('/profile'));
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Choose Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="dateTime"
            value={formInput.dateTime}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">{appointmentObj.appointmentId ? 'Update' : 'Create'} Appointment
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
    dateTime: PropTypes.string,
    // time: PropTypes.string,
    // notes: PropTypes string,
    appointmentId: PropTypes.number,
    userId: PropTypes.number,
  }),
  mentorId: PropTypes.string.isRequired,
};
AppointmentForm.defaultProps = {
  appointmentObj: initialState,
};
