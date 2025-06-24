import React, { useState } from 'react'
import RequestRecipe from './RequestRecipe'

function Main() {
  let [listed, setListed] = useState([])


  function addToList(newItem) {
    setListed ([...listed, newItem])
  }


  function submitted(data) {
    const newItem = data.get('ingred')
    if (newItem.trim() !== '') {
      addToList(newItem)
    }
  }

  function removeElem(indexToRemove) {
    setListed(listed.filter((_, index) => index !== indexToRemove))
  }

  return (
    <>
      <form action={submitted}>

        <>
          <input type='text' name='ingred' placeholder='eggs, meat ..'/>
          <button className='ing-btn' disabled={listed.length > 7}>+ Add ingredient</button>
        </>

      </form>


      <ul className='grad-list'>
        {listed.length ?
          <>
            <h2>Ingredients on hand:</h2>
              {listed.map((ing, index) =>
                (
                  <div className='one-li'>
                    <li key={index}>{ing}</li>
                    <button onClick={() => {removeElem(index)}}>❌</button>
                  </div>
                ))} 
          </>
          : null
        }
      </ul>

      <RequestRecipe listed={listed}/>

    </>
  )
}

export default Main