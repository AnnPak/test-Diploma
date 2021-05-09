import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'components/common/Theme/theme';
import { Router } from 'components/Router/Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router />
    </ThemeProvider>
  );
};

export default App;
