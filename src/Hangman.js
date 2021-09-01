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
   const bodyParts = document.getElementsByClassName('hide');
    let elementShowed;

    if(mistakes >= 0 && mistakes < 11){
        elementShowed = bodyParts[mistakes];
        elementShowed.classList.add('show') ;
    }

    return(
        <div>
            <img src={bar} alt='bar' className="bar"/>
            <div className="container">
                <img src={head} alt='head' className=" hide head fit" />
                <img src={neck} alt='neck' className=" hide neck fit" />
                <img src={body} alt='body' className="hide body fit" />
                <img src={rarm} alt='right-arm' className=" hide right-arm fit" />
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