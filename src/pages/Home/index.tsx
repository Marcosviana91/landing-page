import { useState } from 'react'

import Header from '../../containers/Header'
import Main from '../../containers/Main'
import Footer from '../../containers/Footer'

function Home() {
  const [navBarActivate, setNavBarActivate] = useState('about')
  return (
    <>
      <Header
        navBarActivate={navBarActivate}
        setNavBarActivate={setNavBarActivate}
      />
      <Main navBarActivate={navBarActivate} />
      <Footer />
    </>
  )
}

export default Home
