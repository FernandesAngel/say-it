import { Header } from '../../components/Header'
import { TextOutput } from '../../components/TextOutput'
import { transcribe } from '../../services/SpeechToText'
import * as S from './styles'
import { useMemo, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { CiMicrophoneOn } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export const TextToSpeechTemplate = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAudio = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const file = event.target.files?.[0];
    if (!file) return;

    const result = await transcribe(file);
    setText(result);
    setLoading(false)
  };

  const loadingComponent = useMemo(() => {
    return loading && <S.Loading><AiOutlineLoading3Quarters size={24} color='#FFFFFF' /></S.Loading>
  }, [loading])

  return (
    <S.Container>
      <Header/>
      <S.Content>
        <S.LeftContainer>
          <S.FileInputWrapper>
            <S.HiddenFileInput type="file" accept="audio/*" onChange={handleAudio} multiple />
            <S.InputText>
              {loading && loadingComponent}
              <CiMicrophoneOn size={124} />
              Clique ou arraste um arquivo aqui
              </S.InputText>
          </S.FileInputWrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <TextOutput text={text}  />
        </S.RightContainer>
      </S.Content>
      <ToastContainer theme='dark' />
    </S.Container>
  )
}
