import Letter from './Letter'

const UsedArray = ({usedArray}) => {
    return(
        <div>
            <p>Used letters: </p>
            <div className="inline">
            {
                usedArray.map((letter, i) => (
                <Letter key={i} letter={letter} />
                ))
            }
            </div>
        </div>
       
    )
}

export default UsedArray