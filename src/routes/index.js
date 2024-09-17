import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import TabNav from './TabNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
