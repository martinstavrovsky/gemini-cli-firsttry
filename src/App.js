
import React from 'react';
import Questionnaire from './components/Questionnaire';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Questionnaire />
      </Container>
    </ThemeProvider>
  );
}

export default App;
