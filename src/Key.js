
const Letter = ({letter, style}) => {
    return(
        <div className="p-white">
            <p  className={style} >{letter}</p>
        </div>
    )
}

export default Letter;