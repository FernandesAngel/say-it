import React, { useState } from 'react'
import * as S from './styles'
import { toast } from 'react-toastify'

type ITextOutput = {
  text: string
}

const Component: React.FC<ITextOutput> = ({text, }) => {

  const [areaText, setAreaText] = useState(text)

  const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(areaText);
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
        <S.Text>
          <S.TextArea
            value={areaText}
            rows={20}
            onChange={e => setAreaText(e.target.value)}
          />
        </S.Text>
      </S.Container>
    )
}

export const TextOutput = React.memo(Component)
