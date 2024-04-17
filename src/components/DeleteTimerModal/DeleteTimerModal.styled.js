import styled from 'styled-components';

export const Button = styled.button`
  width: 180px;
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

export const DelBtnWrapper = styled.div`
display:flex;
gap:8px;

`