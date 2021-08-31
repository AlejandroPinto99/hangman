import './image.css'

import bar from './images/bar.png'
import head from './images/head.png'
import neck from './images/neck.png'
import rarm from './images/right-arm.png'
import larm from './images/left-arm.png'
import rhand from './images/right-hand.png'
import lhand from './images/left-hand.png'
import body from './images/corpus.png'
import rleg from './images/right-leg.png'
import lleg from './images/left-leg.png'
import rfoot from './images/right-foot.png'
import lfoot from './images/left-foot.png'


const Hangman = ({mistakes}) => {
    const bodyParts = document.getElementsByClassName('hide')
    let elementShowed

    if(mistakes >= 0 && mistakes < 11){
        elementShowed = bodyParts[mistakes]
        elementShowed.classList.add('show')  
        console.log(bodyParts)
    }

    if(mistakes > 10) {
        console.log("Game over")
    }
       

    return(
        <div>
            <img src={bar} alt='bar' />
            <div>
                <img src={head} alt='head' className="hide" />
                <img src={neck} alt='neck' className="hide" />
                <img src={body} alt='body' className="hide" />
                <img src={rarm} alt='right-arm' className="hide" />
                <img src={larm} alt='left-arm' className="hide" />
                <img src={rhand} alt='right-hand' className="hide" />
                <img src={lhand} alt='left-hand' className="hide" />
                <img src={rleg} alt='right-leg' className="hide" />
                <img src={lleg} alt='left-leg' className="hide" />
                <img src={rfoot} alt='right-foot' className="hide" />
                <img src={lfoot} alt='left-foot' className="hide" />
            </div>
        </div>
    )
}

export default Hangman