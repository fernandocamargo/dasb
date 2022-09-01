import type { AnyAction } from 'redux';

import { CLEAR, SET_DETAILS } from './constants';

export const clear = () => ({ type: CLEAR });

export const setDetails = ({ details }: AnyAction) => ({
  type: SET_DETAILS,
  details,
});
