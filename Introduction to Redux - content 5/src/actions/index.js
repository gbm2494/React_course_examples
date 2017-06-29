import axios from 'axios';
const API_KEY = '0ac6fb17-bac6-462e-b56e-aaff4240b636';
const ROOT_URL = 'https://content.guardianapis.com/search?api-key=' + API_KEY;

export const FETCH_NEWS = 'FETCH_NEWS';
export const CHANGE_NEWS = 'CHANGE_NEWS';

export function fetchNews(term){
  const url = ROOT_URL + '&q=' + term;
  const request = axios.get(url);
  return{
    type : FETCH_NEWS,
    payload : request
  };
}

export function changeNewsSelected(newItem){
  return{
    type : CHANGE_NEWS,
    payload : newItem
  }
}
