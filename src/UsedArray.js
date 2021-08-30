import Letter from './Letter'

const UsedArray = ({usedArray}) => {
    console.log(usedArray)
    return(
        <div className="inline">
        {
            usedArray.map((letter, i) => (
                    <Letter key={i} letter={letter} />
            ))
        }
    </div>
    )
}

export default UsedArray