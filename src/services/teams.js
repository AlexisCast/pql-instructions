import { CLIENT_URL, TEAMS_URL } from '../config';

export const getTeams = () =>
  fetch(CLIENT_URL + TEAMS_URL, {
    method: 'GET'
  });

export const createTeam = (data) =>
  fetch(CLIENT_URL + TEAMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
