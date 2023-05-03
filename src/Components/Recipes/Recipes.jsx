import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RBanner from './RBanner';

const Recipes = () => {

    const recipes = useLoaderData()

    return (
        <div>
            {
                recipes.map(recipe=><RBanner key={recipe.id} recipe={recipe}></RBanner>)
            }
        </div>
    );
};

export default Recipes;