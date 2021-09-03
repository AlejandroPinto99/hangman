const Letter = ({letter, style}) => { //The letter and the style is received for show it 
    return(
        <div>
            <p  className={style} >{letter}</p>
        </div>
    )
}

export default Letter;