import axios from "axios";
import { apiUrl } from "../constants";
import { getLocalStorage } from "./browser-storage";

export const getHeaders = (accessToken) => ({
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
});

export const _getUrl = (...paths) => {
  return [apiUrl, ...paths].join('/');
};

export const _GET_ = (url: string) => {
  const headers = getHeaders(getLocalStorage('access_token'));
  return axios.get(url, {
    headers
  }).then(({ data }) => data);
};

export const _POST_ = (url: string, body: any) => {
  const headers = getHeaders(getLocalStorage('access_token'));
  return axios.post(url, body, {
    headers
  }).then(({ data }) => data);
};
