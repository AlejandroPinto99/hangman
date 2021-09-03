import '../styles/images.css'

//All the model parts get imported

import bar from '../assets/images/bar.png'
import head from '../assets/images/head.png'
import neck from '../assets/images/neck.png'
import rarm from '../assets/images/right-arm.png'
import larm from '../assets/images/left-arm.png'
import rhand from '../assets/images/right-hand.png'
import lhand from '../assets/images/left-hand.png'
import body from '../assets/images/corpus.png'
import rleg from '../assets/images/right-leg.png'
import lleg from '../assets/images/left-leg.png'
import rfoot from '../assets/images/right-foot.png'
import lfoot from '../assets/images/left-foot.png'


const Hangman = ({mistakes}) => {
    let elementShowed;       //The element we want to show
    const images = document.getElementsByClassName('fit') //All the elements get into this array
    
    if(mistakes === -1) {  //At the beginning of the game
        for(let i = 0; i < images.length; i++) {
            images[i].classList.remove('show') //Al the images get it's show class removes, in case they have it.
        }
    }
       
    if(mistakes >= 0 && mistakes < 11){ //Then, according to the number of mistakes
        elementShowed = images[mistakes]; //The current image is selected in this variable
        elementShowed.classList.add('show') ; //And receives the show class, and is showed to the player
    } 

    return(
        <div className="elements-container">
            <img src={bar} alt='bar' className="bar"/>
            <div className="container">
                <img src={head} alt='head' className="hide head fit" />
                <img src={neck} alt='neck' className="hide neck fit" />
                <img src={body} alt='body' className="hide body fit" />
                <img src={rarm} alt='right-arm' className="hide  right-arm fit" />
                <img src={larm} alt='left-arm' className="hide left-arm fit" />
                <img src={rhand} alt='right-hand' className="hide right-hand fit" />
                <img src={lhand} alt='left-hand' className="hide left-hand fit" />
                <img src={rleg} alt='right-leg' className="hide right-leg fit" />
                <img src={lleg} alt='left-leg' className="hide left-leg fit" />
                <img src={rfoot} alt='right-foot' className="hide right-foot fit" />
                <img src={lfoot} alt='left-foot' className="hide left-foot fit" />
            </div>
        </div>
    )
}

export default Hangman