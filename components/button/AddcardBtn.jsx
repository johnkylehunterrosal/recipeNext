
const AddCardBtn = ({onClick}) => {
  return (
    <>
        <button className="recipe__add_button" onClick={onClick}>
            <span className="recipe__add_main">
                <span className="recipe__add_ico">
                <span className="recipe__add_blur"></span> 
                <span className="recipe__add_text">+</span>
                </span>
                Add
            </span>
        </button>
    </>
  )
}
export default AddCardBtn