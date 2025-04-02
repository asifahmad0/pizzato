import { useState } from 'react'
import Navebar from './componant/Navebar'
import Hero from './componant/Hero'
import Services from './componant/services'
import Banner from './componant/Banner'
import Review from './componant/Review'
import Footer from './componant/Footer'


function App() {

  return (
    <>
     <Navebar />
     <Hero />
     <Services />
     <Banner />
     <Review />
     <Footer />
    </>
  )
}

export default App
