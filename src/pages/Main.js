import React from 'react'
import Fslide from './Fslide'
import MainBuss from './MainBuss'
import MainVisual from './MainVisual'

const Main = () => {
  return (
    <main className='Main'>
        <MainVisual />
        <MainBuss/>
        <Fslide/>
    </main>
  )
}

export default Main