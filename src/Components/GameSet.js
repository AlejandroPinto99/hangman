import { useState, useEffect } from 'react'

import '../styles/App.css'

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
   const [showModal, setModal] = useState(false);
   const [message, setMessage] = useState('')

//-------------------------------------REQUEST A NEW WORD----------------------------------------
    
   async function requestNum() {

        let random = Math.floor(Math.random()*Math.pow(10, 5))
        try{
            const res = await fetch(
                `https://random-words-api.vercel.app/word?number=${random}` //Fetching the random API with a random value
            );
            const json = await res.json();

            if(json[0].word.length <= 12){
                setWord(json[0].word);
            } else {
                requestNum(); //If the word is longer than 12 characters, we request a new one
            }
            
        } catch(e) {  //Managing any error
            alert(e.message);
       }
        
    }

//-----------------------------------FILLS THE NEW SECRET WORD WITH BLANK SPACES------------------------- 

    const fillSecretArray = () => {
        let spaces = []
        for(let i = 0; i < word.length ; i++){
            spaces.push(' ') //We fill all the cells with empty spaces
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
        if((key.keyCode >= 65 && key.keyCode <= 90) && mistakes < 10) { //If they key a valid key
            checkKeyPressed(String.fromCharCode(key.keyCode));
        }
    }


    //---------------------------------- CHECK IF LETTER IS CORRECT-------------------------------
    const checkKeyPressed = (key) => {
        let wrong = true;

        for(let i = 0; i <word.length; i++){  
            if(word[i].toUpperCase() === key) {  //The word is traversed and all keys are checked
                secret[i] =  key                 //If key pressed is equal to one word's character, is assigned
                wrong = false;                   //The player hasn't done a mistake
            } 
        } 

        if(wrong === true) {                     //If the player did a mistake
            if(!(used.includes(key))) {          //And the key pressed hasn't been pressed before
            setMistakes(mistakes + 1)            //We count one mistake
            used.push(key)                       //And we add the that key to the pressed list
            }
        }

        setSecret([...secret])                   //The cells get updated

        checkVictory();                          //We check if the player won

        checkLoss();                             //We check if the player lost
    }

    const checkLoss = () => {
        if(mistakes === 9){   //If the player has the max number of mistakes
            setMessage("GAME OVER");   // Shows GAME OVER
            setModal(true);           //We show the game over panel with the message
        }
    }

    const checkVictory = () => {
            for(let i = 0; i < secret.length; i++){
                if(secret[i] === ' ') { //If all the valid cell has a empty space inside of it
                   return false;         // then that means that the player hasn't won ye
                } 
            }
            //If not
            setMessage("Congratulation! You won!!")  //We set the win message
            setModal(true); //And we show the modal with the proper message
    }

    const resetGame = () => {
        setUsed([]); //Used list gets cleaned
        setSecret([]); //Secret gets cleaned
        setMistakes(-1); //The mistakes count gets reset
        setWord('');     //Prepare the word variable to request a new one for the next game
        setModal(false); // Modal is set on false for no be showed

        //At the end we request a new word
        requestNum();    
    }

    return(
        <div className="grid" >
            <div className="hangman">
                <Hangman mistakes={mistakes}/>
            </div>

            <div className="missed">
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
                 showModal ? (
                        <Modal >
                            <div className="game-over-div">
                                <div className="game-over-info" >
                                    <h1 className="title">{message}</h1>
                                    {
                                        mistakes === 10 ? (
                                            <p className="word">The word was: {word}</p>
                                        ) : null
                                    }
                                    <button className="gover-btn" onClick={resetGame}>NEW WORD</button>
                                </div>
                            </div>
                        </Modal>
                ) : null}

        </div>
    )
}

export default RandomWord;