import React,{ useState } from 'react'
import { ThemeProvider } from 'styled-components';
import light from './themes/light'
import dark from './themes/dark'
import Home from './pages/Home';
import GlobalStyled from './themes/global';

function App() {
  const [theme,setTheme] = useState(light);
  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <Home toggleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}

export default App
