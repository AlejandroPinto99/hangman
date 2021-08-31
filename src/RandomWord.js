import { useState, useEffect } from 'react'


import './letterList.css'

import LetterList from './LetterList';
import UsedArray from './UsedArray';
import Hangman from './Hangman';


//The max length for our words is going to be 12

const RandomWord = (props) => {
   const [word, setWord] = useState(''); //Set the state of the word
   const [secret, setSecret] = useState();
   const [used, setUsed] = useState([]);
   const [mistakes, setMistakes] = useState(-1);
    
   async function requestNum() {
        const random = Math.floor(Math.random()*Math.pow(10, 5))
        try{
            const res = await fetch(
                `https://random-words-api.vercel.app/word?number=${random}` //Fetching the random API with a random value
            );

            const json = await res.json();

            setWord(json[0].word)

        } catch(e) {  //Managing any error
            console.log("Word not found")
        }

    
    }

    const fillSecretArray = () => {
        let spaces = []
        for(let i = 0; i < word.length ; i++){
            spaces.push(' _ ')
        }

        setSecret(spaces);
    }

    useEffect(() => {
        requestNum(); //Making the request just one time
    }, []) 

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
   
  

    function checkKey(key) {
        if((key.keyCode >= 65 && key.keyCode <= 90) || key.keyCode === 165) {
            checkKeyPressed(String.fromCharCode(key.keyCode));
        }
    }


    //---------------------------------- CHECK IF LETTER IS CORRECT-------------------------------
    const checkKeyPressed = (key) => {
        let wrong = true;
        if(!(used.includes(key)))
        used.push(key)

        for(let i = 0; i <word.length; i++){
            if(word[i].toUpperCase() === key) {
                secret[i] =  key
                wrong = false;
            } 
        } 

        if(wrong === true) {
            setMistakes(mistakes + 1)
        }

        setSecret([...secret])
    }



    return(
        <div>
            <p>{word}</p>
            <div>
                {   
                    secret ? (<LetterList word={secret} />) : (<div></div>)
                }
            </div>
            <div>
                {   
                    used ? (<UsedArray usedArray={used} />) : (<div></div>)
                }
            </div>

            <div>
                <Hangman mistakes={mistakes}/>
            </div>
            
        </div>
    )
}

export default RandomWord;