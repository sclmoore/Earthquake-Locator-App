import React from 'react';
import { MantineProvider } from '@mantine/core';
import MyApp from './components/MyApp'

function App() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
      colors: {
        'main-green': ['#e6fcf5','#c3fae8','#96f2d7','#63e6be','#38d9a9','#20c997','#12b886','#0ca678','#099268','#087f5b'],
        'main-pink': ['#fff0f6','#ffdeeb','#fcc2d7','#faa2c1','#f783ac','#f06595','#e64980','#d6336c','#c2255c','#a61e4d']
      },
      primaryColor: 'main-pink',
      
    }}
    >
        <MyApp />
    </MantineProvider>
  );
}

export default App;
