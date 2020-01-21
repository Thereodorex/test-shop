import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Item } from './Item';

import { cartSelector } from '../../features/cart/selectors';

import { BigButton } from '../../ui/Button';

const CartStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Cart = () => {
  const phones = useSelector(cartSelector);

  let listItems;
  let button;

  const handleClick = e => {
    e.preventDefault();
    alert('Дальнейшие действия не определены');
  }

  if (phones.length === 0) {
    listItems = 'Корзина пуста';
    button = null;
  } else {
    listItems = phones.map(phone => 
      <Item key={phone.phone.id} {...phone.phone} count={phone.count}/>
    );
    button = <BigButton onClick={handleClick}>Оформить заказ</BigButton>;
  }

  return (
    <CartStyled>
      <div>{listItems}</div>
      {button}
    </CartStyled>
  );
}