import { Grid } from 'gridjs-react';

function Lib() {
  return (
    <Grid
      data={[
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com'],
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com'],
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com'],
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com'],
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com'],
      ]}
      columns={['Name', 'Email']}
    />
  );
}

export default Lib;
