import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 50px auto;
  border: none;
  background: green;
  border-radius: 12px;
  font-size: 20px;
  padding: 12px 24px;
  color: white;
  transform: scale();
  box-shadow: rgba(0, 0, 0, 0.55) 1.95px 1.95px 2.6px;
  transition: transform 150ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
