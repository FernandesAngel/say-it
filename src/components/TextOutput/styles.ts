import styled from '@emotion/styled'


export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #302939ff;
  border-radius: 16px;
  flex-direction: column;
`
export const Functions = styled.div`
  width: 100%;
  border-bottom: 0.2px solid #1c1b1b;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`
export const Title = styled.h3`
  margin: 0;
  padding: 0 20px;
`
export const Clipboard = styled.button`
  padding: 4px 16px;
  margin: 0 20px;
  background-color: #beb9cbff;
  border: 0;
  border-radius: 4px;
  color: #1c1b1b;
`
export const Text = styled.p`
  margin: 0;
  padding: 16px 20px;
  min-height: 120px;
  font-size: 0.8;
`