import { SET_APPLICATION_DATA } from '../constants/action-types';

export function getData(payload) {
  return { type: SET_APPLICATION_DATA, payload }
}