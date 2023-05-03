import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {

    const recipes = useLoaderData()
    console.log(recipes)

    return (
        <div>
            this is recipes page
        </div>
    );
};

export default Recipes;