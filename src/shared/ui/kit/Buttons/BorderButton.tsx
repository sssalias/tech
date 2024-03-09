import React from 'react'

const BorderButton = ({children}:any) => {
    return (
        <button
            className="transition-all ease-in bg-transparent hover:bg-dark-violet text-dark-violet font-semibold hover:text-white py-2 px-4 border border-dark-violet hover:border-transparent rounded">
            {children}
        </button>
    );
};

export default BorderButton;