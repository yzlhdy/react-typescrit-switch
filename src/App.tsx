import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import Header from './components/Header';
import GlobalStyle from './styles/global'

function App() {
  const [theme, setTheme] = useState(light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </ThemeProvider>


  );
}

export default App;
