
const SubmitFormBtn = ({onClick}) => {
   
  return (
    <>
        <button className="recipe__submit_btn" onClick={onClick}>
            <span className="txt">submit</span>
            <span className="txt2">sent!</span>
            <span className="loader-container">
            <span className="loader"></span>
            </span>
        </button> 
    </>
  )
}

export default SubmitFormBtn