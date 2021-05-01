import React from 'react';

import * as S from './layout.styled.js';

interface Props {
    
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <S.wrapper>
            <S.body>
              {children}
            </S.body>

            <S.footer>
                <span>
                  Development by Anna
                </span>
            </S.footer>
        </S.wrapper>

        
    )
}
