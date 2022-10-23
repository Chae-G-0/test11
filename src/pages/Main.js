import React from 'react'
import Fslide from './Fslide'
import MainBuss from './MainBuss'
import MainContent from './MainContent'
import MainVisual from './MainVisual'
import MainWeat from './MainWeat'

const Main = ({weather}) => {
  return (
    <main className='Main'>
        <MainVisual />
        <MainBuss/>
        <MainWeat weather={weather} />
        <MainContent />
        <Fslide/>
    </main>
  )
}

export default Main