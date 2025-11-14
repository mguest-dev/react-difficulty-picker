
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {DisplayDifficulty} from './components/DisplayDificulty/DisplayDifficulty.jsx'
import {MenuListItem} from './components/MenuListItem/MenuListItem.jsx';
import './App.css'

function App() {

  return (
    <>
      <div>
          <MenuListItem difficulty={"Hard"} />
          <DisplayDifficulty difficulty={"Hard"} />
      </div>
    </>
  )
}

export default App
