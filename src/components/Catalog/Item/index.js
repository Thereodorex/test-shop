import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { parsePrice } from '../../../utils';

import { addAction, setCountAction } from '../../../features/cart/ducks';
import { Button, SmallButton } from '../../../ui/Button/index';

const ItemStyled = styled.div`
  margin: -1px -1px 0 0;
  padding: 30px 20px;
  width: 300px;
  height: 600px;
  border: 1px solid #d6dbe0;

  img {
    width: 100%;
    height: 300px;
  }
`;

const Price = styled.div`
  margin: 20px 0 0;
  color: #f91155;
  font-size: 22px;
  font-weight: 700;
`;

const Name = styled.div`
  margin: 40px 0 0;
`;

const BuyButton = styled(Button)`
  margin: 50px 0;
`;

const CounterWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-flow: row wrap;
  width: 150px;
  justify-content: space-between;
  align-items: center;
`;

export const Item = (props) => {

  const {image, price, name, count, id} = props;

  // console.log(count);

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(addAction(props));
  }

  const handleChangeCount = changeValue => e => {
    e.preventDefault();
    dispatch(setCountAction({id, count: count + changeValue}));
  }

  const button = count === 0
    ? <BuyButton onClick={handleClick}>В корзину</BuyButton>
    : <CounterWrapper>
        <SmallButton onClick={handleChangeCount(-1)} className='reverseColor'>-</SmallButton>
          {count}шт
        <SmallButton onClick={handleChangeCount(1)}>+</SmallButton>
      </CounterWrapper>

  return (
    <ItemStyled>
      <img  src={image} alt='im'/>
      <Price>{parsePrice(price)}</Price>
      <Name>{name}</Name>
      {button}
    </ItemStyled>
  );
}