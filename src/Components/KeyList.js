import Key from './Key'

const LetterList = ({word}) => { //The new word is passed 
    const Keys = [] //Created a empty array

    for(let i = 0; i < 12 - word.length; i++){
        Keys.push(<Key letter=" " style="inactive-key" />) //According to the word's length, the rest of the spaces
        }                                                  // will be showed as inactive cells. 
        
    for(let i = 0; i < word.length; i++){
        Keys.push(<Key letter={word[i]} style="keys" />) //Then we add the other cells that 
                                                          //get a character, and the proper style
    }

    //We show the resulting array
    return(
        <div className="inline-keys">
            {Keys}
        </div>
    )

}

export default LetterList;