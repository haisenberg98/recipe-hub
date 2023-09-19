import React from 'react';

function Nutrients({ nutrientData }) {
  // console.log(nutrientData.nutrients);

  const roundAndFormatNutrients = nutrient => {
    // Round to 2 decimal places and convert to string
    return nutrient.toFixed(2);
  };

  const filterKeywords = ['Carbohydrates', 'Calories', 'Protein', 'Fat'];

  const isBold = nutrientName => {
    return filterKeywords.includes(nutrientName)
      ? 'font-extrabold'
      : 'font-medium';
  };

  // Sorting nutrients by important keywords
  const sortedNutrients = [...nutrientData.nutrients].sort((a, b) => {
    if (filterKeywords.includes(a.name) && !filterKeywords.includes(b.name)) {
      return -1;
    }
    if (!filterKeywords.includes(a.name) && filterKeywords.includes(b.name)) {
      return 1;
    }
    return 0;
  });

  return (
    <div className='container mx-auto my-11'>
      <div className='flex flex-col items-center px-10 max-w-4xl space-y-4'>
        <h2 className='text-xl font-semibold mb-4'>Nutritional Information</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {sortedNutrients.map(item => (
            <div
              key={item.name}
              className='flex flex-col p-4 bg-gray-100 rounded-md'
            >
              <span className={`'text-lg text-primary ${isBold(item.name)}`}>
                {item.name}
              </span>
              <span className='text-sm'>
                {item.amount} {item.unit}
              </span>
              <span className='text-xs text-gray-500'>
                Daily Needs: {item.percentOfDailyNeeds}%
              </span>
            </div>
          ))}
        </div>

        <h2 className='text-xl font-semibold mt-6 mb-4'>
          Additional Properties
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {nutrientData.properties.map(property => (
            <div
              key={property.name}
              className='flex flex-col p-4 bg-gray-100 rounded-md'
            >
              <span className='text-lg font-medium'>{property.name}</span>
              <span className='text-sm'>
                {roundAndFormatNutrients(property.amount)} {property.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nutrients;
