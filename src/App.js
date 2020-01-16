import React, { useState } from 'react';
import styled from 'styled-components';

import { CheckBox } from './ui/CheckBox';
import { Button, SmallButton, BigButton } from './ui/Button';
import { Select } from './ui/Select';

const ListItem = styled.div`
  margin: 50px 0 0 300px;
`;

function App() {

  const [currentValueIndex, setCurrent] = useState(1);

  const selectProps = {
    values: [1, 2, 3],
    currentValueIndex,
    setCurrent
  }

  return (
    <div>
      {/* <ListItem><CheckBox checked={false}/></ListItem>
      <ListItem><CheckBox checked={true}/></ListItem>
      <ListItem><Select {...selectProps} /></ListItem>
      <ListItem><SmallButton /></ListItem>
      <ListItem><Button /></ListItem>
      <ListItem><BigButton /></ListItem> */}
    </div>
  );
}

export default App;
