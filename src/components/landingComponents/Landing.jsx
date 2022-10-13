import React from 'react'
const Landing = () => {
  const clientId = `${process.env.REACT_APP_CLIENT_ID}`
  const redirectUri = `${process.env.REACT_APP_REDIRECT_URI}`
  const endpoint = `${process.env.REACT_APP_AUTH_ENDPOINT}`
  const responseType = `${process.env.REACT_APP_RESPONSE_TYPE}`

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-black-500">
        <div className='text-white flex flex-col gap-6 text-center items-center'>
            <h1 className='text-4xl font-bold'>SPOTIFY SHUFFLE</h1>
            <p className='w-1/2 text-center'>Let's face it, the built in shuffle feature in Spotify is terrible (no offense). That's why Spotify Shuffle is here; All you need to do is sign in and choose a playlist, we will take care of the rest and seemlessly rearrange your playlist for</p>
            <div>
                <a href={`${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`} className='bg-green-500 rounded-full p-4 hover:bg-green-600 font-bold flex align-center'>CONNECT SPOTIFY</a>
            </div>
        </div>
    </div>
  )
}

export default Landing