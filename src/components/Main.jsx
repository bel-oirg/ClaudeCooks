import React, { useState } from 'react'

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



  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
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

      {listed.length >= 0 ? 
      <div className='ClaudeSend'>

        <div>
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from the list of ingredients.</p>
        </div>

        <button onClick={handleClick} className={loading ? 'loading' : ''}>
          <span className='btn-text'>Get a recipe</span>
        </button>

      </div>

      : null
      }

    </>
  )
}

export default Main