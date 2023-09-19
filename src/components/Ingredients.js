import React from 'react';

function Ingredients({ recipeData }) {
  console.log(recipeData);
  if (!recipeData) {
    return <div>Data not available.</div>;
  }

  const roundAmount = amount => {
    if (amount <= 1) return 1;
    return Math.round(amount);
  };

  return (
    <div className='my-11'>
      <div className='flex flex-col items-center px-10 md:max-w-4xl space-y-4'>
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
              <span>{`${roundAmount(ingredient.measures.metric.amount)} ${
                ingredient.measures.metric.unitLong
              } of ${ingredient.name}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
