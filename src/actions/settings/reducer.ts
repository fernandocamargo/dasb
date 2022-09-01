import type { AnyAction } from 'redux';

import getLocale from 'locale';

export const initialize = () => ({ locale: getLocale() });

export default (state = initialize(), { type }: AnyAction) => {
  switch (type) {
    default:
      return state;
  }
};
