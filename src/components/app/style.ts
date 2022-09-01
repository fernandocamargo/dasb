import property from 'lodash/property';
import styled from 'styled-components';

import * as Types from './types';

export default (component: Types.Default) => styled(component)`
  background-color: #f4f4f4;
  padding: 1rem;

  h1 {
    font-family: ${property('theme.typography.emphasis')};
  }

  & > {
    *:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;
