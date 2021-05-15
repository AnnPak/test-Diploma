import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { useStyles } from './layout.materialStyles';
import * as S from './layout.styled';

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <S.Wrapper>
      <S.Header>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.navbar}>
            <div className={classes.linkWrapper}>
              <Link to="/" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Проекты
                </Typography>
              </Link>
              <Link to="/calendar" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Календарь
                </Typography>
              </Link>
              <Link to="/profile" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Профиль
                </Typography>
              </Link>
              <Link to="/signUp" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Регистрация
                </Typography>
              </Link>
              <Link to="/signIn" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Авторизация
                </Typography>
              </Link>
            </div>

            <Button color="primary">Login</Button>
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
