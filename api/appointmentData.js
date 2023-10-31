import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
const getAppointments = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/appointments`, {
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

const createAppointment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        resolve(data);
      } else {
        reject(new Error('Failed to create appointment'));
      }
    })
    .catch(reject);
});

const updateAppointment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/appointments/${payload.appointmentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(async (res) => {
    let data;
    if (res.ok) {
      data = await res.json();
      resolve(data);
    }
  })
    .catch(reject);
});
export { getAppointments, createAppointment, updateAppointment };
