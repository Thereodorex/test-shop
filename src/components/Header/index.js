import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

import { parsePrice, declens } from '../../utils';

import { BigButton } from '../../ui/Button';

import { countSelector, priceSelector } from '../../features/cart/selectors';

const HeaderWrapper = styled.div`
  width: 1200px;
  margin: 20px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMiddleElem = styled.div`
`;

export const Header = () => {
  const count = useSelector(countSelector);
  const price = useSelector(priceSelector);

  return (
    <HeaderWrapper>
      <Link to='/'><BigButton>Каталог</BigButton></Link>
        <HeaderMiddleElem>
          <b>{count} </b>
          {declens(count, ['товар', 'товара', 'товаров'])} на 
          <b> {parsePrice(price)}</b>
        </HeaderMiddleElem>
      <Link to='/cart'><BigButton>Корзина</BigButton></Link>
    </HeaderWrapper>
  );
}