
import './App.css'
import Box from './projects/BoxClickerGame/Box';
import BoxGrid from './projects/BoxClickerGame/BoxGrid';
import Dice from './projects/LuckyGame/Dice'
import Die from './projects/LuckyGame/Die'
import { LuckyN } from './projects/LuckyGame/LuckyN'
import { sum } from './utils';

function lessThan4(dice) {
  return sum(dice) < 4;
}

const equalTo = (dice) => {
   return dice.every(v => v === dice[0]);
}

function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN winCheck={lessThan4} title="Roll Less than 4"/>
      <LuckyN winCheck={equalTo} title="Roll same number"/> */}
      {/* <LuckyN numDice={3} goal={11}/> */}
    </>
  )
}

export default App
