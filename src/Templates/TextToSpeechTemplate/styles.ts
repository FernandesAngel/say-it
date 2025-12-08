import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  max-width: 1000px;
  padding: 20px 40px 40px;
  flex-direction: column;
  margin: 100px auto;
  background-color: #FFFFFF;
  border-radius: 16px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  gap: 20px;

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
  }
`
export const LeftContainer = styled.div`
  width: 50%;
  @media (max-width: 768px){
    width: 100%;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  @media (max-width: 768px){
    width: 100%;
  }
`

export const FileInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 410px;
  background: linear-gradient(160deg, rgba(133, 28, 214, 1) 0%, rgba(176, 63, 186, 1) 100%);
  border-radius: 16px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const InputText = styled.div`
  color: #FFF;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dashed #FFF;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.2s ease-in-out;
  gap: 12px;

  &:hover {
    color: #44084fff;
    border-color: #44084fff;
  }
`

export const Loading = styled.div`
  animation: ${spin} 1s linear infinite;
`