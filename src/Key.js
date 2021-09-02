
const Letter = ({letter, style}) => {
    return(
        <div>
            <p  className={style} >{letter}</p>
        </div>
    )
}

export default Letter;