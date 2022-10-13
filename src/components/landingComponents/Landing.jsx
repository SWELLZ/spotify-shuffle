import React from 'react'
const Landing = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center pl-16">
        <div className='w-2/5 text-black-500'>
            <h1 className='text-4xl font-bold'>SPOTIFY SHUFFLE</h1>
            <p className='mt-5'>Let's face it, the built in shuffle feature in Spotify is terrible (no offense). That's why Spotify Shuffle is here; All you need to do is sign in and choose a playlist, we will take care of the rest and seemlessly rearrange your playlist for</p>
            <div>
                <button className='bg-green-500 rounded-full p-3 hover:bg-green-600 font-bold'>CONNECT SPOTIFY</button>
            </div>
        </div>
    </div>
  )
}

export default Landing