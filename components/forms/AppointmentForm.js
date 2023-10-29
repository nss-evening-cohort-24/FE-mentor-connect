import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createAppointment, updateAppointment } from '../../api/appointmentData';

const initialState = {
  date: '',
  time: '',
  notes: '',
};

export default function AppointmentForm({ mentorId, appointmentObj }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState({ ...initialState, mentorId });
  const router = useRouter();

  useEffect(() => {
    if (appointmentObj.appointmentId) setFormInput(appointmentObj);
  }, [appointmentObj, user]);

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
      const payload = { ...formInput, uid: user.uid };
      createAppointment(payload).then(({ name }) => {
        const patchPayload = { appointmentId: name };
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
            type="date"
            name="date"
            value={formInput.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Choose time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formInput.time}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Let your mentor know what you would like to focus on."
            name="notes"
            value={formInput.notes}
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
    appointmentId: PropTypes.string,
  }),
  mentorId: PropTypes.string.isRequired,
};

AppointmentForm.defaultProps = {
  appointmentObj: initialState,
};
