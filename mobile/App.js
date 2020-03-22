import React, { useState, useEffect } from 'react';
import Main from './src/pages/Main';
import Header from './src/components/Header';
import { ThemeProvider } from 'styled-components';
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  const [checked, setChecked] = useState('');



  return (
    <ThemeProvider theme={checked ? light : dark}>
      <Header checked={checked} setChecked={setChecked}/>
      <Main/>
    </ThemeProvider>
  );
}