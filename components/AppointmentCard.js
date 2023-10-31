import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AppointmentCard({ appointmentObj }) {
  const appointmentDate = new Date(appointmentObj.dateTime);
  const date = appointmentDate.toLocaleDateString();
  const time = appointmentDate.toLocaleTimeString();
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div id="clock">
        <Card.Img variant="top" src="/clock.jpg" alt="icon" className="image" />
      </div>
      <Card.Body>
        <h6>{appointmentObj.mentor.firstName} {appointmentObj.mentor.lastName}</h6>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <Button id="edit">EDIT</Button>
        <Button id="memdel" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AppointmentCard.propTypes = {
  appointmentObj: PropTypes.shape({
    mentor: PropTypes.shape({

      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    category: PropTypes.shape({
      categoryName: PropTypes.string,

    }),
    dateTime: PropTypes.string,
  }).isRequired,
};
