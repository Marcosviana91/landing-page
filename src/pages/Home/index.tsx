import { useState } from 'react'

import Header from '../../containers/Header'
import Main from '../../containers/Main'
import Footer from '../../containers/Footer'
import StyledHome from './style'

function Home() {
  const [navBarActivate, setNavBarActivate] = useState('about')

  return (
    <StyledHome>
      <Header
        navBarActivate={navBarActivate}
        setNavBarActivate={setNavBarActivate}
      />
      <Main navBarActivate={navBarActivate} />
      <Footer navBarActivate={navBarActivate} />
    </StyledHome>
  )
}

export default Home
