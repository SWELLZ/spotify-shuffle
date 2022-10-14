import React from 'react'

const Feedback = ({toggle}) => {
  return (
    <div className='absolute mx-auto left-0 right-0 top-0 w-full h-full bg-black-500/50 flex justify-center items-center'>
        <div className='w-4/5 h-1/2 rounded-lg bg-black-500 lg:w-1/2 lg:h-1/2 flex flex-col items-center justify-evenly'>
            <h1 className='text-2xl text-white'>Your playlist has been shuffled!</h1>
            <button onClick={toggle} className='bg-green-500 w-3/4 mx-auto p-5 rounded-full font-bold'>Thank you</button>
        </div>
    </div>
  )
}

export default Feedback