import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { useStyles } from './layout.materialStyles';
import * as S from './layout.styled';
/**
 * 1) Разобраться с глобальными стилями
 * 2) Доделать sidbar
 * 3) Добавить 2 новые страницы (рег/авторизац)
 */

interface Props {
  name?: string;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <S.Wrapper>
      <S.Header>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.navbar}>
            <div>
              <Link to="/" className={classes.link}>
                <Typography variant="h5" color="primary" className={classes.title}>
                  Проекты
                </Typography>
              </Link>
              <Typography variant="h5" color="primary" className={classes.title}>
                <Link to="/calendar" className={classes.link}>
                  Календарь
                </Link>
              </Typography>
              <Typography variant="h5" color="primary" className={classes.title}>
                <Link to="/profile" className={classes.link}>
                  Профиль
                </Link>
              </Typography>
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
