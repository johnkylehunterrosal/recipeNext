"use client"
import { useState } from "react"
import Delete_card_btn from "../button/Delete_card_btn"
import Add_card_btn from "../button/Add_card_btn"

const AddForm = () => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    imageUrl: "",
    description: "",
    ingredients: [],
    instructions: []
  })
  const [ingredient, setIngredient] = useState({
    id: 0,
    name: ""
  })
  const [instruction, setInstruction] = useState({
    id: 0,
    name: ""
  })

  const handleChange = (setter) => (e) => {
    setter(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const addIngredient = (e) => {
    e.preventDefault()
    if (ingredient.name.trim() === "") {
      alert("Please fill up properly")
      return
    }
    const newIngredient = { ...ingredient, id: Date.now() }
    setRecipe(prevState => ({
      ...prevState,
      ingredients: [...prevState.ingredients, newIngredient]
    }))
    setIngredient({ id: 0, name: "" })
  }

  const addInstruction = (e) => {
    e.preventDefault()
    if (instruction.name.trim() === "") {
      alert("Please fill up properly")
      return
    }
    const newInstruction = { ...instruction, id: Date.now() }
    setRecipe(prevState => ({
      ...prevState,
      instructions: [...prevState.instructions, newInstruction]
    }))
    setInstruction({ id: 0, name: "" })
  }

  const removeIngredient = (index) => {
    setRecipe(prevState => ({
      ...prevState,
      ingredients: prevState.ingredients.filter((_, i) => i !== index)
    }))
  }

  const removeInstruction = (index) => {
    setRecipe(prevState => ({
      ...prevState,
      instructions: prevState.instructions.filter((_, i) => i !== index)
    }))
  }

  return (
    <>
      <form className="lg:mx-56 w-full">
        <input
          onChange={handleChange(setRecipe)}
          placeholder="Recipe Name:"
          className="recipe__input"
          name="recipeName"
          type="text"
          value={recipe.recipeName}
        />
        <input
          onChange={handleChange(setRecipe)}
          placeholder="Image Url:"
          className="recipe__input mt-5"
          name="imageUrl"
          type="text"
          value={recipe.imageUrl}
        />
        <input
          onChange={handleChange(setRecipe)}
          placeholder="Short Description:"
          className="recipe__input mt-5"
          name="description"
          type="text"
          value={recipe.description}
        />
        <div className="mt-5">
          <div className="flex">
            <input
              className="recipe__input mr-5"
              onChange={handleChange(setIngredient)}
              value={ingredient.name}
              placeholder="Ingredients:"
              name="name"
              type="text"
            />
            <Add_card_btn onClick={addIngredient} />
          </div>
          <div className="flex flex-col">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={ingredient.id} className="recipe__add_card mt-5 gap-5 px-5">
                <div className="recipe__add_delete">
                  <Delete_card_btn onClick={() => removeIngredient(index)} />
                </div>
                {ingredient.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex">
            <input
              className="recipe__input mr-5"
              onChange={handleChange(setInstruction)}
              value={instruction.name}
              placeholder="Instructions:"
              name="name"
              type="text"
            />
            <Add_card_btn onClick={addInstruction} />
          </div>
          <div className="flex flex-col">
            {recipe.instructions.map((instruction, index) => (
              <div key={instruction.id} className="recipe__add_card mt-5 gap-5 px-5">
                <div className="recipe__add_delete">
                  <Delete_card_btn onClick={() => removeInstruction(index)} />
                </div>
                <p>{instruction.name}</p>
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  )
}

export default AddForm