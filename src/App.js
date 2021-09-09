import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const ShowFoods = () => {
    return foods.map((foodItem) => {
      return <FoodBox food={foodItem} />;
    });
  };

  return (
    <div className="App">
      <ShowFoods />
    </div>
  );
}

export default App;
