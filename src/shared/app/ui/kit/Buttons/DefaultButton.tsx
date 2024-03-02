import React from 'react';

const DefaultButton = ({children}:any) => {
    return (
        <button
            className="bg-dark-violet hover:bg-dark-violet text-white font-bold py-2 px-4 border border-dark-violet rounded">
            {children}
        </button>
    );
};

export default DefaultButton;