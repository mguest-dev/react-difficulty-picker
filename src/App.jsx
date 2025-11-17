
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {DisplayDifficulty} from './components/DisplayDificulty/DisplayDifficulty.jsx'
import {MenuListItem} from './components/MenuListItem/MenuListItem.jsx';
import {MenuList} from "./components/MenuList/MenuList.jsx";
import './App.css'
import s from './style.module.css';



function App() {

    const [currentDifficulty, setCurrentDifficulty] = useState("");

    const onMenuListItemClick = (difficulty) => {
        setCurrentDifficulty(difficulty);
    }

  return (
    <>
      <div>
          <h1>Select Your Difficulty</h1>
          <div className={s.workspace}>
              <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficulty} />
              <DisplayDifficulty difficulty={currentDifficulty} />
          </div>

      </div>
    </>
  )
}

export default App
