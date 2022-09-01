// @ts-nocheck
import { useCallback, useState } from 'react';

export const increment = (value) => value + 1;

export default (props) => {
  const [value, update] = useState(0);
  const onClick = useCallback(() => update(increment), []);

  return { onClick, value, ...props };
};
