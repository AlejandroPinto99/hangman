import Key from './Key'

const LetterList = ({word}) => {

    const Keys = []


    for(let i = 0; i < 12 - word.length; i++){
        Keys.push(<Key letter=" " style="inactive-key" />)
        }
    
    for(let i = 0; i < word.length; i++){
        Keys.push(<Key letter={word[i]} style="keys" />)
    }

    return(
        <div className="inline-keys">
            {Keys}
        </div>
    )

}

export default LetterList;