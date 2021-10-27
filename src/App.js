import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
// here we are importing all of our components, Jsons, extensions, CSS, etc. this is how we connect our react page to our other documents. we import (set variable name) from (where ever we are grabbing our info from)
// we are going to be using the foods. this means we have to create a variable/constant in the code that we can use to manipulate the array contained in this JSON
// to do this we use a useState. this is because we will be manipulating this array by adding foods to it, filtering it, and searching it. we create the constant and in brackets
// we contain the two fundamental states of use state. the beginning and next. in the foods example we have copyfoods, which is also the useState because in the syntax, this is where we begin,
// this is where we put our initial value. in the useState we will place what is declared as foods and represents the foods.json folder array.
function App() {
  //here we have our use states. these are generally grouped together at the top of the page *gang*. I will first describe the nature of the syntax and then relate it to the rest of the page.
  //below you will see that our before and after values are shared in the same constant. this is indicative of the relationship between the initial value, and its setValue, or rather, its before
  //and next/after state. the initial value can start of with just a boolean, array, variable, etc, basically this is treated just like any other constant(maybe? i dont know what im talking
  //about so if youre reading this because i shared it with you, please note that, as you are aware, i type this out on my third day of ever knowing what react is. with the caveat, we push on
  //into the fray that is React.) next we have our setState. now in this project specifically (i speak as a man not God) it can be seen we create methods and functions to associate with the set
  //state. this is probably because the setState is where the magic happens. I probably should have mentioned before, but the point of useState is to manipulate and change content on the page.
  //each time these methods are used, or as google puts it, The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components.
  //Using the useState hook inside a function component, you can create a piece of state without switching to class components... whatever the fuck that means. basically it seems as though
  // useState consolidates the amount of rendering the computer has to do, allowing for more efficiency. this along with components really allows the ability to create single page apps that are quick
  //clean, and elegant. -------------------------------------------------------SO WITH THAT SAID LETS RECAP EH?------------------------------------------------------------------------
  //this shit is important. so im drilling it in.
  //const(this is how the computer knows and understands the relationship between the initial and setState)[(title holding starting value===useState),(title holding setState, generally this is the
  //first title with setplaced in front of it. you dont have to do this, but it gets pretty fucking confusing if you dont.)] = useState(these parenthesis will hold your beginning value)
  const [showForm, setShowForm] = useState(false);
  // im just going to say it, our choice of how we chose to name our useStates made this way more confusing than it needed to be to break down. so note to self, we gotta make sure to really
  //come up with titles that differentiate what we are trying to accomplish. having 4 titles all sharing the word food made this almost impossible to fully break down what was going on without having
  // to quadruple check what the fuck I was even working with/ manipulating.
  const [theFood, setTheFood] = useState('');
  const [copyFood, setFood] = useState(foods);
  //okay useState was longer than I anticipated, but these methods and functions are complex, and the more i write, the more i realize how complex it is, the more i realize how absolutley amazing and
  //useful it is. so its imperative we know how these pull together in the grand scheme of the app. I go into detail below but I want to have another summary up here that touches on all the useStates
  //we create so that we fundamentally understand how and why these states make programming easier despite its complexity. Reach (although a fickle bitch) is intuitive. we just gotta learn to
  //vibe with it is all.
  //here we go. well start with showForm. lets start of in the array -- const = [*here*, setShowForm] -- as you can see 'here' is where the showForm value is placed. anything that is placed in
  //this spot is automatically given the useState value. why? i dont know thats just what the syntax dictates. the relationship of the titles and their values can visually be seen as
  // ---const [sameShit, differentShit(normally a function or method that changes it from its original state)] = useState(sameShit) -- notice where 'sameShit' is. again this is in reference to
  //the VALUES, the initial state is given a title which inherits the initial value from useState. this means they have the same value but they are not referenced as the same, one being titled and the
  //other is given the value by the useState method. in other words, the initial state inherits the initial value from the useState. show form starts with a value of false, which means that
  //in our onClick ternary operator, means that we are only going to display 'not Showing!' see below. when we click the button, we dictate to the computer with the setShowForm method that showForm
  //now has a value of !showForm(showForms original value was true. with the '!' and because we only have two outcomes (true or false) we know now that the setShowForm(final state of the event)
  //is a true value. each time we click the button it will oscillate between true and false because of this '!').

  const ShowFoods = () => {
    return copyFood.map((foodItem) => {
      return <FoodBox key={foodItem.name} food={foodItem} />;
      // here is where we create the function that is going to map out every object in the array in our app. this will be placed in the div later. as you can see foodItem is our parameter(our item)
      // Keys are used to React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.
      // the word food here actually isnt identified on this page but it identified as a prop in the FoodBox.js page here we dictate that food(the prop) is equal to foodItem, which brings that prop
      //value full circle back from the FoodBox into this function so that we can properly map and manipulate on this page. in other words we attach the prop to the parameter of this function.
    });
  };

  const handleChange = (e) => {
    setTheFood(e.target.value);
    //here we set out event (which is the individual events each time a key is pressed(the end value being whatever we have typed, and we set that targeted input after the event = to the
    // final set state of the new array which will contain and return the new food item via handle submit.))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newFoodArray = [...copyFood];
    //here we have newFood Array, which is a copy of the foods json Array. creating a variable allows us to manipulate this as a copy and also gives us the container we will use to store the
    //value we inevitably will put into our next state, the set state for foods(the end result after submission)
    newFoodArray.push({ name: theFood });
    //here we are push our submission 'theFood' whose original value is defeined by the useState as ''. why is that? what we are trying to accomplish with this line of code is- we have a button. we
    //want this button to add a food inputted by the user. when the web page opens, we have empty quotes because the user has not inputted anything yet. note we are dealing with theFood and setTheFood.
    //setTheFood tracks and contains what is typed into the input. this is the final state of theFood. here we are going to push our new food item into our new array and return it as out setFood upon submission
    //this will give us a copy of the original array with our new added food item pushed into it, displaying it on the screen.
    setFood(newFoodArray);
    //setFood is the final state of what we want to map out. we have our initial value = to a copy of the foods JSON. (note: here we are dealing with copyFood and setFood) in other words our
    //beginning array of foods and our ending state of our array of foods. here we are defining what we want to happen upon submission. handle submit is tied with the onSubmit function found in our
    //HTML form tag. so from top to bottom we create a variable that will hold a copyFood which holds the value of the JSON foods array (this is defined in our use state. we have our initial vale
    // equal to the useState which holds the value 'foods(our variable defined upon import) making copyFoods = to foods.) we call that variable newFoodArray. we do this because we are not able to manipulate
    //the json from this page, so this brings that array into a context that allows it to be manipulated like any other variable on this page in javascript. upon submission we are going to push
    //the value grabbed by handlechange setTheFood(this targets what has been changed in the input box and keeps that value)
  };

  const mealSearch = (e) => {
    //No Bruno
    let newFoodArray = [...foods];
    //because we are in a different function now, we must create another copy of our foods JSON to manipulate and use. we place this copy into a new variable.
    const newMealSearch = newFoodArray.filter((newFoodMeal) => {
      //now we place our new food array copy into a filter function that has the newly defined parameter(newFoodMeal) this function is set to return newFoodMeal.name. we lowercase this and lowercase this
      //array and lowercase our targetted input to make sure that while being compared, they have the same spelling. capitals in this case will throw the code off because it wont be included in the
      //includes method. so we are going to return anything that matches our input by setting the filter to filter our everything except that which includes the user input.
      return newFoodMeal.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFood(newMealSearch);
    //our new food display will display only the returned filter. if that filter found a items that matches the inputted value, that is what will be displayed on the screen.
  };

  return (
    <div className="App">
      <input placeholder="search" onChange={mealSearch} />
      <br />

      <button onClick={() => setShowForm(!showForm)}>Add New Foods</button>
      {showForm ? (
        // here we have a ternary operator for the showForm function. showForm is originally defined as false by its useState. this false value comes in later after we define our setShowForm
        // setShowForm(!ShowForm), meaning that when this button is clicked, it will be *NOT* ShowForm (the first time we click it, it means the setShowForm will *NOT* be false, making the final
        // setState true in the current event.) this is where our ternary operator comes into play. the syntax of our ternary operator is as follows.
        //showForm(are we showing the form) ?(if) (showForm is true( the computer will show us the forms and input later defined. here you really have to pay attention to the use of and what is contained
        // in the parenthesis.) :(colon acts as the mediator between true and false value. if the showForm is false, we simpily are going to write out in a script 'not Showing!') our form is contained
        //in a ternary operator that only outputs when the showForm is set to a true value. this true value is given to show form upon the first click, changing it from its intial useState value of
        //false. useState = showForm due to the syntax nature of creating useStates. see above.
        <form onSubmit={handleSubmit}>
          {/* //here us the submit button for the new food form. */}
          <input onChange={handleChange} placeholder="Add FoodName" />
          {/* //here is the input with onchange. on change is going to allow for a command everytime something is inputted into the search box.
           here we place our handle change button. so we have onChange, which is use telling the computer 'when you detect a changed state(event(e)) do {*this*}
           which in our case, we are placing our handleChange function. the handle change is going to set 'setTheFood' method(that is, the method that will give us the final array )  */}
          <button>Add Food</button>
        </form>
      ) : (
        'Not Showing!'
      )}

      <ShowFoods />
      {/* here we have our showFoods function which will map out and organize our foods json(contained in foods) notice it is placed in chevron arrows. this further drives home
      the idea that this is a javascript function that outputs in a HTML context. */}
    </div>
  );
}

export default App;
