import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: 'linear-gradient(180deg ,#FFFFFF 0%,#ECEEF9 100%)',
        boxShadow: 'none',
      },
    },
    MuiTypography: {
      h5: {
        fontSize: '15px',
        fontWeight: 500,
      },
    },
  },
});

export default theme;
