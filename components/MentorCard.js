/* eslint-disable react/forbid-prop-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';
import Link from 'next/link';

// function show the authenticated user's profile info
export default function MentorCard({ mentorObj }) {
  return (
    <Card id="mentor-card" style={{ width: '18rem', margin: '10px' }}>
      <Image src={`./${mentorObj.mentorId}.jpg`} alt="mentor" height="250px" className="mentor-display-photo" roundedCircle />
      <Card.Body>
        <h3 className="serif">{mentorObj.firstName} {mentorObj.lastName}</h3><br />
        <p className="mentor-info">{mentorObj.bio}</p><br />
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
