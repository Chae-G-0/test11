import React from 'react'
import Fslide from './Fslide'
import MainBuss from './MainBuss'
import MainContent from './MainContent'
import MainVisual from './MainVisual'
import MainWet from './MainWet'

const Main = ({wet}) => {
  return (
    <main className='Main'>
        <MainVisual />
        <MainBuss/>
        <MainWet wet={wet} />
        <MainContent />
        <Fslide/>
    </main>
  )
}

export default Main