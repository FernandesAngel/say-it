import React from 'react'
import * as S from './styles'


const Component: React.FC = () => {
    return (
      <S.Container>
        <S.Title>Say It</S.Title>
      </S.Container>
    )
}

export const Header = React.memo(Component)
