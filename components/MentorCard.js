/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// function show the authenticated user's profile info
export default function MentorCard({ mentorObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', border: '3px solid gold' }}>
      {/* <img src={mentorImg} alt="user" width="100px" height="100px" className="user-display-photo" /> */}
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
      </Card.Body>
    </Card>
  );
}

MentorCard.propTypes = {
  mentorObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    categories: PropTypes.string,
  }).isRequired,
};
