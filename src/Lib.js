import { Grid } from 'gridjs-react';

function Lib() {
  return (
    <Grid
      data={[
        ['John Lagrange', 'john@example.com'],
        ['Mike Stewart', 'mike@gmail.com'],
        ['John Kolvanski', 'john@example.com'],
        ['Mike Palvonov', 'mike@gmail.com'],
        ['John Kurberg', 'john@example.com'],
        ['Mike Alan Sevinski', 'mike@gmail.com'],
        ['John Deez', 'john@example.com'],
        ['Mike Nutz', 'mike@gmail.com'],
        ['John Yurivonne', 'john@example.com'],
        ['Mike Wazowski', 'mike@gmail.com'],
      ]}
      columns={['Name', 'Email']}
    />
  );
}

export default Lib;
