import { ThemeProvider } from 'styled-components'

import Home from './Pages/home'
import GlobalStyle from './GlobalStyle'


const light = {
  white: 'hsl(0, 0%, 100%)',
  darkGray: 'hsl(0, 0%, 63%)',
  veryDarkGray: 'hsl(0, 0%, 27%)',
  black: 'hsl(0, 0%, 0%)',
}

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App;
