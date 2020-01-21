import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { phonesSelector } from '../../features/catalog/selectors';
import { categoriesSelector } from '../../features/catalog/selectors';

import { setFilterAction } from '../../features/filter/ducks';

import { Item } from './Item';

import { List } from '../../ui/List';

const ItemContainer = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const CatalogPage = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export const Catalog = (props) => {

  const dispatch = useDispatch();

  const phones = useSelector(phonesSelector);
  const categories = useSelector(categoriesSelector);

  // console.log(categories);

  let data = null;

  if (phones.length) {
    data = phones.map(phone =>
      <Item key={phone.id} {...phone}></Item>  
    )
  }

  const handleCategoryClick = id => e => {
    e.preventDefault();
    console.log(id);
    dispatch(setFilterAction(id));
  }

  return (
    <CatalogPage>
    <List
      header={'Категория'}
      values={[{name: 'All', id: 'all'}, ...categories]}
      handleClick={handleCategoryClick}
    />
    <ItemContainer>
      {data}
    </ItemContainer>
    </CatalogPage>
  );
}