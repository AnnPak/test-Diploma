import React from 'react';

import Typography from '@material-ui/core/Typography';

import * as S from './authLayout.styled';

export const NonAuthLayout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <Typography variant="h4">Регистрация/Авторизация</Typography>
      {children}
    </S.Wrapper>
  );
};
