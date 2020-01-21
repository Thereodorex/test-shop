import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 190px;
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.div`
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

const Item = styled.a`
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  color: #001a34;
  font-size: 16px;
  line-height: 2;

  &:hover {
    color: blue;
  }
`;

export const List = props => {
  const { values, header, handleClick } = props;

  const listItems = values.map(value => 
    <Item key={value.id} onClick={handleClick(value.id)}>
      {value.name}
    </Item>
  )

  return (
    <Wrapper>
      <Header>{header}</Header>
      {listItems}
    </Wrapper>
  );
}