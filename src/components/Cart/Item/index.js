import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { parsePrice } from '../../../utils';

// import { Select } from '../../../ui/Select';
import { SmallButton } from '../../../ui/Button/index';

import { setCountAction, deleteAction } from '../../../features/cart/ducks';

const ItemStyled = styled.div`
  width: 900px;
  height: 90px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(214, 219, 224);

  &:last-child {
    border-bottom: 0;
  }

  img {
    max-width: 60px;
    max-height: 90px;
    overflow: hidden;
  }
`;

// const SelectWrapper = styled.div`
//   margin: 30px 0;
// `;

const CounterWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-flow: row wrap;
  width: 150px;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  width: 200px
`;

const DelButton = styled.div`
  cursor: pointer;
  color: rgb(0, 91, 255);
`;

const Price = styled.div`
  width: 100px;
`;

// const getValues = () => {
//   const arr = [];
//   for (let i = 0; i < 10; i++)
//     arr.push(i);
//   return arr;
// }

export const Item = (props) => {

  console.log(props);

  const dispatch = useDispatch();

  const {image, price, name, count, id} = props;

  // const values = getValues();

  // const setCurrent = (count) => {
  //   dispatch(setCountAction({id, count}));
  // }

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteAction(id));
  }

  const handleChangeCount = changeValue => e => {
    e.preventDefault();
    const newCount = count + changeValue;
    if (newCount > 0)
      dispatch(setCountAction({id, count: newCount}));
  }

  return (
    <ItemStyled>
      <img src={image} alt={'imgage'}/>
      <Name>{name}</Name>
      <DelButton onClick={handleDelete}>удалить</DelButton>
      <Price>{parsePrice(price)}</Price>
      <CounterWrapper>
        <SmallButton onClick={handleChangeCount(-1)} className='reverseColor'>-</SmallButton>
          {count}шт
        <SmallButton onClick={handleChangeCount(1)}>+</SmallButton>
      </CounterWrapper>
    </ItemStyled>
  );
}