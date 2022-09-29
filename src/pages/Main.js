import React from 'react'
import Fslide from './Fslide'
import MainBuss from './MainBuss'
import MainContent from './MainContent'
import MainVisual from './MainVisual'

const Main = () => {
  return (
    <main className='Main'>
        <MainVisual />
        <MainBuss/>
        <MainContent/>
        <Fslide/>
    </main>
  )
}

export default Main