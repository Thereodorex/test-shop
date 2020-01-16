import React from 'react';
import styled from 'styled-components';

const theme = '#005bff';
const border = '#d6dbe0';
const hover = '#99bdff';
const checkedHover = '#004ed6';

const StyledCheckBox = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid ${border};
  border-radius: 3px;

  &:hover {
    border-color: ${hover};
  }

  &.checked {
    background: ${theme};
    border-color: ${theme};
  }

  &.checked:hover {
    background-color: ${checkedHover};
    border-color: ${checkedHover};
  }
`;

const CheckMark = styled.div`
  margin: 1px 0 0 1px;
  width: 10px;
  height: 6px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(-45deg);
`;

export const CheckBox = (props) => {
  let classes = '';
  for(let key in props) {
    if (props[key] === true) {
      classes += ' ' + key;
    } 
  }
  return (
    <StyledCheckBox className={classes}>
      {props.checked ? <CheckMark /> : null}
    </StyledCheckBox>
  );
}