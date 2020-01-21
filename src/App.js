import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 1200px;
`;

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Catalog}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  );
}

function App() {
  return (
    <AppWrapper>
      <Header />
      <Router />
    </AppWrapper>
  );
}

export default App;
