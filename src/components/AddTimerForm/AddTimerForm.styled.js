import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  width: 200px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-direction: column;
  font-size: 16px;
`;

export const TitleForm = styled.p`
  margin-bottom: 16px;
  margin-top:0px;
  font-size: 24px;
  font-weight: 600;

  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  display: block;
  margin: 0px auto;
  border: none;
  background: green;
  border-radius: 8px;
  padding: 8px 12px;
  color: white;
  transform: scale();
  box-shadow: rgba(0, 0, 0, 0.55) 1.95px 1.95px 2.6px;
  transition: transform 150ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const FieldStyled = styled(Field)`
 
  width: 184px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 8px;
`;
