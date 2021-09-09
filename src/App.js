import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [showForm, setShowForm] = useState(false);

  const ShowFoods = () => {
    return foods.map((foodItem) => {
      return <FoodBox food={foodItem} />;
    });
  };

  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>Add New Foods</button>
      {showForm ? (
        <form>
          <input placeholder="Add Food"></input>
          <button>Add Food</button>
        </form>
      ) : (
        'Not Showing.'
      )}
      <ShowFoods />
    </div>
  );
}

export default App;
