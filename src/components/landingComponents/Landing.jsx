import React from 'react'
import Footer from '../footerComponents/Footer'
const Landing = () => {
  const clientId = `${process.env.REACT_APP_CLIENT_ID}`
  const redirectUri = `${process.env.REACT_APP_REDIRECT_URI}`
  const endpoint = `${process.env.REACT_APP_AUTH_ENDPOINT}`
  const responseType = `${process.env.REACT_APP_RESPONSE_TYPE}`

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-black-500">
        <div className='text-white flex flex-col gap-6 text-center items-center'>
            <h1 className='text-4xl font-bold w-4/5'>SHUFFLE FOR SPOTIFY</h1>
            <p className='w-4/5 xs:w-1/2 text-center'>Gone are the days of dealing with the Spotify shuffle feature playing the same songs back to back. Shuffle For Spotify allows you to seamlessly rearrange your entire playlist in truly random order! Just connect your Spotify account, select a playlist, and watch the magic happen!</p>
            <div>
                <a href={`${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${encodeURI('playlist-modify-private playlist-modify-public')}`} className='bg-green-500 rounded-full p-4 hover:bg-green-600 font-bold text-black-500 flex align-center'>CONNECT SPOTIFY</a>
            </div>
        </div>
    </div>
  )
}

export default Landing