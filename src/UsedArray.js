import Letter from './Key'

const UsedArray = ({usedArray}) => {
    return(
        <div>
            <p className="font-format"> YOU MISSED: </p>
            <div className="inline-used">
            {
                usedArray.map((letter, i) => (
                <Letter key={i} letter={letter} style="key-used"/>
                ))
            }
            </div>
        </div>
       
    )
}

export default UsedArray