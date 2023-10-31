import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createAppointment, updateAppointment } from '../../api/appointmentData';
import { checkUser } from '../../utils/auth';

const initialState = {
  dateTime: '',
};

export default function AppointmentForm({ mentorId, appointmentObj }) {
  const { user, setUser } = useAuth();
  const [formInput, setFormInput] = useState({ ...initialState, mentorId });
  const router = useRouter();
  // const [, setUser] = useState({});
  useEffect(() => {
    checkUser(user.uid).then(setUser);
    console.log(user);
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
      const payload = { ...formInput, userId: user.userId };
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
            type="text"
            name="dateTime"
            value={formInput.dateTime}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
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
        </Form.Group> */}
        <Button type="submit">{appointmentObj.appointmentId ? 'Update' : 'Create'} Appointment
        </Button>
      </Form>
    </>
  );
}

AppointmentForm.propTypes = {
  appointmentObj: PropTypes.shape({
    dateTime: PropTypes.string,
    // time: PropTypes.string,
    // notes: PropTypes.string,
    appointmentId: PropTypes.string,
    userId: PropTypes.number.isRequired,
  }),
  mentorId: PropTypes.string.isRequired,
};

AppointmentForm.defaultProps = {
  appointmentObj: initialState,
};
