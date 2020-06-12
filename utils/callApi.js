import {API_URL} from './constants.js';

export const getLeagues = async () =>
  await fetch(API_URL + '/getLeagues', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => res);

export const getTeams = (league) => async () =>
  await fetch(API_URL + `/getTeams?league=${league}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => res);

export const getPlayers = (team) => async () =>
  await fetch(API_URL + `/getPlayers?team=${team}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => res);
