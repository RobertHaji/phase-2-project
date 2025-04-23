import { useState } from 'react'
import { RecipeForm } from './RecipeForm'
//import { RecipeForm } from './RecipeForm'
//import {RecipeForm} from "./RecipeForm"
import { ReceiptList } from './RecipeList'

export function App() {

  // // First we are providing a state to hold all the recipes from our db.json
  // const [recipes, setRecipes] = useState([])

  // useEffect(() => {
    
  return (
    <>
    <header> 
    <h1>Recipe book </h1>
      </header>
    <main className='min-h-screen flex p-8 gap-3'>
      <div className='w-[35%]'>
        <strong>+ Add recipes</strong>
          <RecipeForm />
          <ReceiptList/>
      </div>
      <div className='flex-1'> Recipes </div>
    </main>
    <footer></footer>
      
    </>
  )
}


