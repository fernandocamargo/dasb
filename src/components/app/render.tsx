import { Suspense as OnDemand } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import * as Types from './types';
import { About, Home } from './routes';

export default (({ className }) => (
  <div className={className}>
    <h1>This is the app</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula,
      urna id varius imperdiet, quam turpis cursus augue, eu ultricies dui eros
      sed nisl. Nunc accumsan eu orci vel mattis. Class aptent taciti sociosqu
      ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
      tincidunt at magna condimentum ultricies. Duis semper iaculis ornare.
      Pellentesque vel malesuada odio. Maecenas porttitor metus eget ex
      accumsan, ut eleifend lorem pulvinar. Etiam pharetra vehicula mauris.
      Vestibulum volutpat auctor metus, a blandit diam vehicula quis. In
      consequat lobortis maximus. Integer convallis, enim eu dictum molestie,
      odio elit faucibus odio, sed sagittis est nunc sed ante. Etiam cursus
      fermentum luctus. Praesent non tellus facilisis, luctus velit in, interdum
      velit. Sed eget ornare lacus, fringilla consequat magna. Nullam tortor
      erat, posuere a neque ut, efficitur pellentesque arcu. Aliquam sit amet
      pharetra eros, quis pretium metus.
    </p>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <OnDemand fallback="Loading...">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </OnDemand>
  </div>
)) as Types.Default;
