import React from 'react';

import Typography from '@material-ui/core/Typography';

import * as S from './authLayout.styled';

export const AuthLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <Typography variant="h4">Регистрация</Typography>
    </S.Wrapper>
  );
};
