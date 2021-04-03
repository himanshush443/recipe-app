import { useEffect, useState } from 'react';

import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = '0f4983b0';
  const APP_KEY = 'ec4f246f51be25b3a4a074d4978c1352';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button
          className="search-button" type="submit">
            Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => {
        return <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      })}
      </div>
    </div>
  );
}

export default App;
