import { Form,ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormLabel = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: green;
  border: 1px solid #0926a6;
  border-radius: 5px;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;

const ErrorText = styled.p`
color: red;
font-size: 14px`

export const FormErr = ({ name })=> {
  return (
    <ErrorMessage name={name}
      render={message => <ErrorText>{message}</ErrorText>}/>
  )
}
  