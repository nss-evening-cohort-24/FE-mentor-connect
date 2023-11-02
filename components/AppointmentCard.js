import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteSingleAppointment } from '../api/appointmentData';

export default function AppointmentCard({ appointmentObj }) {
  const deleteThisAppointment = () => {
    if (window.confirm(`Cancel appointment with ${appointmentObj.mentor.firstName}?`)) {
      console.warn(appointmentObj.id);
      deleteSingleAppointment(appointmentObj.id).then(() => window.location.reload());
    }
  };

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
        <div>
          <Link href={`/appointment/edit/${appointmentObj.id}`} passHref>
            <Button id="edit">EDIT</Button>
          </Link>
          <Button id="memdel" className="m-2" onClick={deleteThisAppointment}>
            DELETE
          </Button>
        </div>
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
    id: PropTypes.shape({
      id: PropTypes.string,
    }),
    category: PropTypes.shape({
      categoryName: PropTypes.string,
    }),
    dateTime: PropTypes.string,
  }).isRequired,
};
