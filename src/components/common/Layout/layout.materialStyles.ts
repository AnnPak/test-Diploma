import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    margin: '0 6rem 0 0',
  },
  link: {
    textDecoration: 'none',
  },
  linkWrapper: {
    display: 'flex',
  },
});
