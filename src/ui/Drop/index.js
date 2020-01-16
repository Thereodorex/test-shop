import React from 'react';
import styled from 'styled-components';

const border = '#d6dbe0';

const Menu = styled.div`
  margin: 5px 0 0 0;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-flow: column nowrap;
  width: 90px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  width: 90px;
  height: 30px;
  border-bottom: 2px solid ${border};

  &:hover {
    background: #99bdff;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export const Drop = ({values, handleClick, active}) => {

  const listItems = values.map((value, index) =>
    <Item key={value} onClick={handleClick(index)}>{value}</Item>  
  )
  
  return (
    <Menu active={active}>
      {listItems}
    </Menu>
  );
}