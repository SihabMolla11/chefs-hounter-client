import React from 'react';

const Foods = ({food}) => {

    console.log(food)

    const {url, name} = food

    return (
        <div>
            <img className=' rounded-full h-[150px] w-full' src={url} alt={name} />
            <h3 className=' uppercase font-mono font-bold text-center my-4 hover:text-[#FF642F] hover:animate-pulse  text-lg'>{name}</h3>
        </div>
    );
};

export default Foods;