import React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import SplitScreen from './components/SplitScreen'

const App = () => {
  return (
    <div>
      <SplitScreen leftWeight={30} rightWeight={20}>
        <Left/> 
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default App
