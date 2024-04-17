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

export const TimerWraper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  background: ${props=>props.color||'red'};
  padding: 5px;

  & p {
    text-align: center;
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const SpanRed = styled.span`
  margin: 5px;
  padding: 5px;
  background: red;
  font-weight: 700;
`;

export const SpanGreen = styled.span`
  margin: 5px;
  padding: 5px;
  background: green;
  font-weight: 700;
`;

export const SpanBlue = styled.span`
  margin: 5px;
  padding: 5px;
  background: blue;
  font-weight: 700;
`;
