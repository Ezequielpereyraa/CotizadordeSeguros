import styled from '@emotion/styled';

export const Form = styled.div`
  margin: -5rem auto;
  max-width: 600px;
  padding: 1.5rem 4rem;
  background-color: #fff;
  border: 1px solid #90a57e;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  flex: 0 0 100px;
  font-weight: bold;
`;
export const Select = styled.select`
  width: 100%;
  border: 1px solid black;
  padding: 0.8rem 1rem;
  display: block;
  margin: 0.7rem 0;
`;
export const Subtitulo = styled.h4`
  text-align: center;
  border-bottom: 1px solid black;
  margin-top: 34px;
  font-size: 1.4rem;
`;
export const Boton = styled.button`
  display: block;
  width: 90%;
  border: none;
  padding: 0.5rem 2rem;
  background-color: #2ab;
  color: white;
  font-size: 1rem;
  margin: 1.5rem auto;
  transition: 0.5s ease;
  &:hover {
    background-color: #2abc;
    cursor: pointer;
    width: 100%;
  }
`;
export const Error = styled.div`
  background-color: red;
  color: #ffff;
  padding: 0.5rem 2rem;
  width: 90%;
  text-align: center;
`;
