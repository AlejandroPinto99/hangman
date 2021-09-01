import Key from './Key'

const LetterList = ({word}) => {

    const inactiveKeys = []


    for(let i = 0; i < 12 - word.length; i++){
        inactiveKeys.push(<Key letter=" " style="inactive-key" />)
        }
    

    return(
    <div className="inline-keys ">
        <div className="inline-keys">
            {inactiveKeys}
        </div>

        <div className="inline-keys ">
            {
                word.map((letter, i) => (
                    <Key key={i} letter={letter} style="keys" />
                ))
            }
        </div> 
    </div>
    )

}

export default LetterList;