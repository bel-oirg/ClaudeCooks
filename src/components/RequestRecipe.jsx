import React from 'react';
import { getRecipe } from '../huggingFace';
import ReactMarkdown from "react-markdown";

function RequestRecipe({ listed }) {
  const [loading, setLoading] = React.useState(false);
  const [recipeData, setRecipeData] = React.useState(null);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await getRecipe(listed);
      setRecipeData(result);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {listed.length >= 3 && (
        <div className="ClaudeSend">
          <div>
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from the list of ingredients.</p>
          </div>

          <button onClick={handleClick} className={loading ? 'loading' : ''} disabled={loading}>
            <span className="btn-text">{loading ? 'Loading...' : 'Get a recipe'}</span>
          </button>
        </div>
      )}

      {recipeData && (
        <div className='recipe-container'>
          <h1>Taste the magic of AI cooking.</h1>
            <ReactMarkdown>
              {recipeData}
            </ReactMarkdown>
        </div>
        )
      }
    </>
  );
}

export default RequestRecipe;
