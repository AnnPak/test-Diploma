import React from 'react';

import * as S from './layout.styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Body>{children}</S.Body>

      <S.Footer>
        <span>Development by Anna</span>
      </S.Footer>
    </S.Wrapper>
  );
};
