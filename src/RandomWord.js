import { useState, useEffect } from 'react'
import UsedArray from './UsedArray';

import './letterList.css'

import LetterList from './LetterList';

//The max length for our words is going to be 12

const RandomWord = () => {
   const [word, setWord] = useState(''); //Set the state of the word
   const [secret, setSecret] = useState();
   const [used, setUsed] = useState([]);
    
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

    window.addEventListener("keyup", checkKey, false);

    function checkKey(key) {
        if(key.keyCode >= 65 && key.keyCode <= 90) {
            checkKeyPressed(String.fromCharCode(key.keyCode));
        }
    }


    //---------------------------------- CHECK IF LETTER IS CORRECT-------------------
    const checkKeyPressed = (key) => {
        for(let i = 0; i <word.length; i++){
            if(word[i].toUpperCase() === key) {
                secret[i] =  key
                setSecret(secret)
            } else {
                console.log('wrong')
                setUsed([...used, key])
            }
        }
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
                    !used.length === 0 ? (<UsedArray />) : (<div></div>)
                }
            </div>
            
        </div>
    )
}

export default RandomWord;