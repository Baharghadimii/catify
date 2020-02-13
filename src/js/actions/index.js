import { SHOW_CATS } from '../constants/action-types';

export function showCats(payload) {
  return { type: SHOW_CATS, payload }
};