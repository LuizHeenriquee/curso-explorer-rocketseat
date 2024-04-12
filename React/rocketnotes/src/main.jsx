import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'
// import { Details } from "./Details"
// import { Home } from './Home'
// import { SignIn } from './SingIn'
// import { SignUp } from './SignUp'
// import { Profile } from './Profile'
import { New } from './New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <New/>
    </ThemeProvider>
  </React.StrictMode>,
)