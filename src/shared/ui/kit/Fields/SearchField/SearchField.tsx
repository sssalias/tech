import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const SearchField = () => {
    return (
        <div className='shadow w-2/4 flex text-lg justify-center border-b-2 border-gray-400 text-gray-500'>
            <input className='p-4 bg-light-violet rounded-tl w-full outline-0 border-black' type="text"/>
            <button className='py-2.5 px-4 bg-light-violet rounded-tr border-black'>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    );
};

export default SearchField;