import React from 'react'
import * as S from './styles'
import { toast } from 'react-toastify'

type ITextOutput = {
  text: string
}

const Component: React.FC<ITextOutput> = ({text, }) => {

  const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        toast('Copiado com sucesso!')
      } catch (err) {
        toast(`Falha ao copiar texto: ${err}`)
      }
    }

    return (
      <S.Container>
        <S.Functions>
          <S.Title>Transcrição</S.Title>
          <S.Clipboard onClick={copyToClipboard}>Copiar</S.Clipboard>
        </S.Functions>
        <S.Text>{text}</S.Text>
      </S.Container>
    )
}

export const TextOutput = React.memo(Component)
