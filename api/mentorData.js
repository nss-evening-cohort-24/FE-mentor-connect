import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMentors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/mentors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleMentor = (mentorId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/mentors/${mentorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve((data));
      } else {
        resolve({});
      }
    })
    .catch(reject);
});

export {
  getMentors,
  getSingleMentor,
};
