import { useState, useEffect } from 'react'


import './App.css'

import LetterList from './KeyList';
import UsedArray from './UsedArray';
import Hangman from './Hangman';
import Modal from './Modal'


//The max length for our words is going to be 12

const RandomWord = () => {
   const [word, setWord] = useState(''); //Set the state of the word
   const [secret, setSecret] = useState([]);
   const [used, setUsed] = useState([]);
   const [mistakes, setMistakes] = useState(-1);

//-------------------------------------REQUEST A NEW WORD----------------------------------------
    
   async function requestNum() {

        let random = Math.floor(Math.random()*Math.pow(10, 5))
        try{
            const res = await fetch(
                `https://random-words-api.vercel.app/word?number=${random}` //Fetching the random API with a random value
            );
            const json = await res.json();

            if(json[0].word.length <= 12){
                console.log(json[0].word.length)
                setWord(json[0].word);
            } else {
                requestNum();
            }
            
            console.log(json[0].word)
        } catch(e) {  //Managing any error
            console.log("Word not found")

       }
        
    }

//-----------------------------------FILLS THE NEW SECRET WORD WITH BLANK SPACES------------------------- 

    const fillSecretArray = () => {
        let spaces = []
        for(let i = 0; i < word.length ; i++){
            spaces.push(' ')
        }

        setSecret(spaces);
    }

//-------Triggers the NewWord at the beginning of the game
    useEffect(() => {   
        requestNum(); //Making the request just one time
    }, []) 

//------------Triggers the black spaces -------------------
    useEffect(() => {
        fillSecretArray();
    }, [word])


//--------------------------------- KeyBoard Management --------------------------------------
    useEffect(() => {
        window.addEventListener("keyup", checkKey, false);
        return () => {
            window.removeEventListener("keyup", checkKey, false);
        }
    }, [secret])
   
  
//----------------------------------Checks if the key pressed is valid-----------------
    function checkKey(key) {
        if((key.keyCode >= 65 && key.keyCode <= 90) && mistakes < 10) {
            checkKeyPressed(String.fromCharCode(key.keyCode));
        }
    }


    //---------------------------------- CHECK IF LETTER IS CORRECT-------------------------------
    const checkKeyPressed = (key) => {
        let wrong = true;
       

        for(let i = 0; i <word.length; i++){
            if(word[i].toUpperCase() === key) {
                secret[i] =  key
                wrong = false;
            } 
        } 

        if(wrong === true) {
            if(!(used.includes(key))) {
            setMistakes(mistakes + 1)
            used.push(key)
            }
        }

        setSecret([...secret])

        console.log(checkVictory());
    }

    const checkVictory = () => {
            for(let i = 0; i < secret.length; i++){
                if(secret[i] === ' ') {
                   return false;
                }
            }
            return true;
    }

    const resetGame = () => {
        setUsed([]);
        setSecret([]);
        setMistakes(-1);
        setWord('');

        requestNum();

    }

    return(
        <div className="grid" >
            <div className="">
                <Hangman mistakes={mistakes}/>
            </div>

            <div className="">
                {   
                    used ? (<UsedArray usedArray={used} />) : (<div></div>)
                }
            </div>

            <div className="guess">
                <div className="letters-container">
                    {   
                        secret ? (<LetterList word={secret} />) : (<div></div>)
                    }
                </div>
            </div>
                {
                 (checkVictory() === true || mistakes === 10) ? (
                        <Modal>
                            <div className="game-over-div">
                                <div >
                                    <h1 className="title">GAME OVER</h1>
                                    <button className="gover-btn" onClick={resetGame}>NEW WORD</button>
                                </div>
                            </div>
                        </Modal>
                ) : null}
        </div>
    )
}

export default RandomWord;