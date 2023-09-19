import React from 'react';

function Ingredients({ recipeData }) {
  if (!recipeData) {
    return <div>Data not available.</div>;
  }

  return (
    <div className='container mx-auto my-11'>
      <div className='flex flex-col items-center px-10 max-w-4xl space-y-4'>
        <img
          className='object-contain bg-customWhite w-96 rounded-sm'
          src={recipeData.image}
          alt={recipeData.title}
        />
        <h2>{recipeData.title}</h2>
      </div>
      <div className='flex px-10 mt-5 max-w-4xl space-y-2'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          {recipeData.extendedIngredients?.map((ingredient, index) => (
            <div className='flex items-center space-x-4' key={index}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
                className='object-contain w-10 h-10 rounded-md'
              />
              <span>{`${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
