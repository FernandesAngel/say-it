import styled from '@emotion/styled'


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecedf4;
  border-radius: 16px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
export const Functions = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0 10px;
`
export const Title = styled.h3`
  margin: 0;
`
export const Clipboard = styled.button`
  border: 0;
  border-radius: 4px;
  color: #000;
  background-color: transparent;
`
export const Text = styled.div`
  margin: 0;
  padding: 16px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  max-width: 780px;
  font-size: 0.9;
  border: 0;
  border-radius: 8px;
  padding: 10px;
  resize: vertical;
  margin: 0 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ecedf4;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`