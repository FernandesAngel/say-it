import React from 'react'
import * as S from './styles'

type IAudioInput = {
  file: string
}

const Component: React.FC = () => {
    return (
      <S.Container type='file' accept='audio/*'>
      </S.Container>
    )
}

export const AudioInput = React.memo(Component)
