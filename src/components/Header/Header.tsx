import React from 'react'
import * as S from './styles'


const Component: React.FC = () => {
    return (
      <S.Container>
        <h1>Say It</h1>
      </S.Container>
    )
}

export const Header = React.memo(Component)
