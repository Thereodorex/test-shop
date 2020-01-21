import styled from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  background-color: rgb(0, 91, 255);
  color: rgb(255, 255, 255);
  height: 30px;
  width: 96px;
  border-radius: 3px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &.reverseColor {
    background-color: #f2f3f5;
    color: rgb(0, 91, 255);
  }
`;

export const SmallButton = styled(Button)`
  width: 48px;
`;

export const BigButton = styled(Button)`
  width: 400px;
  height: 45px;
`;
