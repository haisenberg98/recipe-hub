import React from 'react';

function InformationView({ instructionData, recipeData }) {
  // console.log(instructionData);
  const instructions = instructionData;
  const mealName = recipeData.title;

  if (!instructions) {
    return <div>Data not available.</div>;
  }
  return (
    <div className='container mx-auto my-11'>
      {instructions.map(instruction => {
        return (
          <div className='flex flex-col px-10 mt-5 space-y-2 max-w-5xl'>
            <h3>{instruction.name !== '' ? instruction.name : mealName}</h3>
            {/* check which step in instruction */}
            <ul className='list-inside space-y-4'>
              {instruction.steps?.map((step, index) => (
                <li
                  className='flex items-center space-x-4 pl-5 list-disc border-l-4 border-primary'
                  key={index}
                >
                  <span>{step.step}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default InformationView;
