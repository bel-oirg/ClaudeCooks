import React from 'react'
import { getRecipe } from '../huggingFace'

async function Recipe({listed}) {

  return (
    <>
      {await getRecipe(listed)}
    </>
  )
}

export default Recipe