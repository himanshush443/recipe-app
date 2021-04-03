import React from 'react';

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.Calories}</p>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={props.image} alt="" />
        </div>
    );
} 

export default Recipe;