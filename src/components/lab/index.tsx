// @ts-nocheck
import styled from 'styled-components';
import { Suspense, lazy, useMemo } from 'react';

import 'macros/controller/macro';

import { Boundary } from './helpers';
import Fallback from './fallback';

export class Core extends Boundary {
  static displayName = 'Lab → 🧠';

  render() {
    const {
      props: { children, ...props },
      state: { error },
    } = this;

    return error ? (
      <Fallback error={error} render={Core.render} {...props} />
    ) : (
      children
    );
  }
}

export const enhance = () => [
  import(/* webpackChunkName: "components/lab/hooks" */ './hooks'),
  import(/* webpackChunkName: "components/lab/statics" */ './statics'),
  import(/* webpackChunkName: "components/lab/style" */ './style'),
];

export const serve = ([{ default: use }, statics, { default: style }]) => {
  const render = styled(Object.assign(Raw, statics))`
    ${style}
  `;

  Object.assign(Core, { render, use });

  return { default: render };
};

export const load = () => Promise.all(enhance()).then(serve);

export const Render = lazy(load);

export const Raw = (props) => {
  const { className, error, onClick, value } = Core.use(props);
  const status = useMemo(() => (error ? 'is not' : 'is'), [error]);
  const style = useMemo(
    () => ({
      '--color': `#${(0x1000000 + Math.random() * 0xffffff)
        .toString(16)
        .substring(1, 7)}`,
    }),
    []
  );

  return (
    <div className={className} style={style}>
      <p>This {status} the lab.</p>
      <pre>{JSON.stringify(value)}</pre>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default function Lab(props) {
  return (
    <Core>
      <Suspense fallback={<p>Loading lab...</p>}>
        <Render {...props} />
      </Suspense>
    </Core>
  );
}
