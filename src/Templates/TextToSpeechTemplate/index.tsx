

import { Header } from '../../components/Header'
import { TextOutput } from '../../components/TextOutput'
import * as S from './styles'
import { useSpeechToText } from '../../hooks/useSpeechToText'
import { useMemo } from 'react'
import { ToastContainer } from 'react-toastify'

export const TextToSpeechTemplate = () => {
  const {handleAudio, loading, transcribedText} = useSpeechToText()
  const loadingComponent = useMemo(() => {
    return loading && <p>⏳ Transcribing…</p>
  }, [loading])

  return (
    <S.Container>
      <Header/>
      <input type="file" accept="audio/*" onChange={handleAudio} multiple />
      {loadingComponent}
      <TextOutput text={transcribedText}  />
      <ToastContainer theme='dark' />
    </S.Container>
  )
}
