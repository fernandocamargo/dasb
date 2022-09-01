// @ts-nocheck
export default ({ error: { message: error }, render: Render }) => (
  <div>
    <h3>Oh, noes... :(</h3>
    <p>{error}</p>
    <Render error />
  </div>
);
