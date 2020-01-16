import React, {useState} from 'react';
import styled from 'styled-components';

import { Drop } from '../Drop';

const border = '#d6dbe0';
const borderHover = '#99bdff';

const Wrapper = styled.div`
  cursor: pointer;
`;

const StyledSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 90px;
  height: 30px;
  border: 2px solid ${border};
  border-radius: 2px;

  &:hover {
    border-color: ${borderHover};
  }
`;

const SelectArrow = styled.div`
  position: relative;
  color: #fff;

  &::after {
    content: ''; 
    position: absolute;
    left: -10px;
    top: -4px;
    border: 8px solid transparent;
    border-top: 8px solid black;
    border-radius: 4px;
  }

  &.active::after {
    border-top: 0 solid black;
    border-bottom: 8px solid black;
  }
`;


export const Select = (props) => {

  const {values, currentValueIndex, setCurrent} = props;

  const [active, setActive] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setActive(!active);
  }

  const handleClickItem = index => e => {
    e.preventDefault();
    setCurrent(index);
  }

  return (
    <Wrapper>
      <StyledSelect onClick={handleClick}>
        {values[currentValueIndex]}
        <SelectArrow className={active ? 'active' : ''} />
      </StyledSelect>
      <Drop {...props} handleClick={handleClickItem} active={active} />
    </Wrapper>
  );
}