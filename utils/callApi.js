import {API_URL} from './constants.js';

export const getLeagues = async () =>
  await fetch(API_URL + 'leagues/allLeagues', {
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

export const getTeams = (leagueId) => async () =>
  await fetch(API_URL + `teams/allTeamsInLeague?leagueId=${leagueId}`, {
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

export const getPlayers = (teamId) => async () =>
  await fetch(API_URL + `players/allPlayersInTeam?teamId=${teamId}`, {
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
