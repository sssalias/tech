import React from 'react'

const Loader = () => {
    return (

        <div className='absolute p-10 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-400 border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
              <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              ></span>
            </div>
        </div>

    )
}

export default Loader