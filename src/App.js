import GameSet from './Components/GameSet'

import './App.css'


const App = () => {
  return(
    <div className="background">
      <div className="gameSpace">
          <GameSet />
          <div className ="triangle"></div>
      </div>
    </div>
  )
}

export default App;
