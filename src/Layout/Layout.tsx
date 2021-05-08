import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './layout.materialStyles';
import * as S from './layout.styled';

interface Props {
  name?: string;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <S.Wrapper>
      <S.Header>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Проекты
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Календарь
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Профиль
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </S.Header>

      <S.Body>{children}</S.Body>

      <S.Footer>
        <span>Development by Annа</span>
      </S.Footer>
    </S.Wrapper>
  );
};
