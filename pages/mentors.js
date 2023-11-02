/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { getMentors } from '../api/mentorData';
import MentorCard from '../components/MentorCard';

export default function ShowMentors() {
  const [mentors, setMentors] = useState([]);

  const getAllMentors = () => {
    getMentors().then(setMentors);
  };

  useEffect(() => {
    getAllMentors();
  }, []);

  return (
    <>
      <br />
      <div id="mentor-container" className="mentor-page">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.mentorId} mentorObj={mentor} onUpdate={getAllMentors} />
        ))}
      </div>
    </>
  );
}
