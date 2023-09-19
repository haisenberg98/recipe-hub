// Import required dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrients from './components/Nutrients';

// Main App component
function App() {
  // State variables
  const [activeTab, setActiveTab] = useState('tab1'); // To manage active tab
  const [recipeData, setRecipeData] = useState([]); // To store recipe data
  const [instructionData, setInstructionData] = useState([]); // To store recipe data
  const [nutrientData, setNutrientData] = useState([]); // To store recipe data
  const [loading, setLoading] = useState(false); // To handle loading state

  const apiKey = '40113a2ebfc04bacb679ddfddb930900'; // Spoonacular API Key
  const recipeId = '12346'; // Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs

  useEffect(() => {
    const url1 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`; //ingredients
    const url2 = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${apiKey}`; //instructions
    const url3 = `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`; //nutrients
    // Define the fetchData function
    const fetchData = async () => {
      setLoading(true); // Set loading to true before API call
      try {
        const response1 = await axios.get(url1); //ingredients
        const response2 = await axios.get(url2); //instructions
        const response3 = await axios.get(url3); //nutrients

        setRecipeData(response1.data); // Store fetched data
        setInstructionData(response2.data);
        setNutrientData(response3.data);
        setLoading(false); // Set loading to false after API call
      } catch (error) {
        setLoading(true); // Set loading to true if API call fails
        console.error('Error fetching data:', error); // Log any errors
      }
    };

    // Execute the fetchData function
    fetchData();
  }, [recipeId]);

  // Display loading screen if the data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Main render logic
  return (
    <div className='flex justify-center items-center min-h-screen bg-customBackground px-4'>
      <div className='flex flex-col bg-customWhite my-10 rounded-md '>
        <div className='flex w-full'>
          {/* Tab buttons */}
          <button
            className={`p-6 w-full rounded-tl-md ${
              activeTab === 'tab1' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('tab1')}
          >
            Ingredients
          </button>
          <button
            className={`p-6 w-full ${activeTab === 'tab2' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Instruction
          </button>
          <button
            className={`p-6 w-full rounded-tr-md ${
              activeTab === 'tab3' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('tab3')}
          >
            Nutrition
          </button>
        </div>
        <div className='flex'>
          {/* Conditional rendering of views based on active tab */}
          {activeTab === 'tab1' && <Ingredients recipeData={recipeData} />}
          {activeTab === 'tab2' && (
            <Instructions
              instructionData={instructionData}
              recipeData={recipeData}
            />
          )}
          {activeTab === 'tab3' && <Nutrients nutrientData={nutrientData} />}
        </div>
      </div>
    </div>
  );
}

// Export the App component
export default App;
