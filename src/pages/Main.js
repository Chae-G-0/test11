import React from 'react'
import MainBuss from './MainBuss'
import MainContent from './MainContent'
import MainVisual from './MainVisual'

const Main = () => {
  return (
    <main className='Main'>
        <MainVisual />
        <MainBuss/>
        <MainContent/>
    </main>
  )
}

export default Main