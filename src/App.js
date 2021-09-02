import RandomWord from './RandomWord'

import './App.css'


const App = () => {
  return(
    <div className="background">
      <div className="gameSpace">
          <RandomWord />
          <div className="triangle"> </div>
      </div>
    </div>
  )
}

export default App;
