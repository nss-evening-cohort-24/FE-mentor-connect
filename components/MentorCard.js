/* eslint-disable react/forbid-prop-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function MentorCard({ mentorObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', border: '3px solid gold' }}>
      <img src="./mentorImg.jpg" alt="user" width="100px" height="100px" className="mentor-display-photo" />
      <Card.Body>
        <h3>{mentorObj.firstName} {mentorObj.lastName}</h3><br />
        <h6 className="mentor-info"><b>Bio:</b> {mentorObj.bio}</h6>
        <h6 className="mentor-info"><b>Areas of Expertise:</b>
          {mentorObj.categories.map((cat) => (
            <ul>
              {cat.categoryName}
            </ul>
          ))}
        </h6>
        <Link href={`/appointment/${mentorObj.mentorId}`} passHref>
          <Button id="book-appt" className="m-2">Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

MentorCard.propTypes = {
  mentorObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    categories: PropTypes.array,
    mentorId: PropTypes.string,
  }).isRequired,
};
