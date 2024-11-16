import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactsTable from './ContactsTable';
import { Container, Typography, Paper } from '@mui/material';

const App = () => {
  const [reloadContacts, setReloadContacts] = useState(false);

  const handleReloadContacts = () => {
    setReloadContacts((prev) => !prev);
  };

  return (
    <Container>
      <h1>Contact Store</h1>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <ContactForm reloadContacts={handleReloadContacts} />
      </Paper>
      <ContactsTable reloadContacts={reloadContacts} />
    </Container>
  );
};

export default App;
