// @ts-nocheck
import noop from 'lodash/noop';
import { Component } from 'react';

export class Boundary extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  static use = noop;

  static render = noop;

  static getDerivedStateFromError(error) {
    return { error };
  }
}
