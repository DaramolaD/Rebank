import React from 'react'
import { About, Company, Cto, Footer, Hero, Navbar, Personalization } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <About />
      <Personalization />
      <Cto />
      <Footer />
    </div>
  )
}

export default App