import Letter from './Letter'

const LetterList = ({word}) => {

    return(
        <div className="inline ">
            {
                word.map((letter, i) => (
                        <Letter key={i} letter={letter} />
                ))
            }
        </div>
    )

}

export default LetterList;