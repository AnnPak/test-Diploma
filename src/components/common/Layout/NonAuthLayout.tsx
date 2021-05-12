import React from 'react';

import Typography from '@material-ui/core/Typography';

import * as S from './authLayout.styled';

export const NonAuthLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <Typography variant="h4">Регистрация/Авторизация</Typography>
    </S.Wrapper>
  );
};
