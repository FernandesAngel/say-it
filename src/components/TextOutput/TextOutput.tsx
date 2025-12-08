import React, { useState } from 'react'
import * as S from './styles'
import { toast } from 'react-toastify'
import { MdOutlineContentCopy } from "react-icons/md";


type ITextOutput = {
  text: string
}

const Component: React.FC<ITextOutput> = ({text}) => {
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
        <S.Title>Transcrição do audio</S.Title>
        <S.Clipboard onClick={copyToClipboard}>
          <MdOutlineContentCopy size={20} />
        </S.Clipboard>
      </S.Functions>
      <S.Text>
        <S.TextArea
          value={areaText ? areaText : text}
          rows={20}
          onChange={e => setAreaText(e.target.value)}
        />
      </S.Text>
    </S.Container>
  )
}

export const TextOutput = React.memo(Component)
