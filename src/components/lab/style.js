import { css } from 'styled-components';

export const error = css`
  cursor: not-allowed;
  text-decoration: line-through;
  user-select: none;
`;

export default css`
  background-color: var(--color);
  ${(props) => props.error && error};
`;
