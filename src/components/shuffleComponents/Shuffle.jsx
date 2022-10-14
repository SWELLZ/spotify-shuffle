import React, { useEffect, useState } from 'react';
import Songs from './Songs';
import logo from '../resources/spotify-logo.png';
import Feedback from '../feedbackComponents/Feedback';

const Shuffle = () => {
    const [token, setToken] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const [clickedPlaylist, setClickedPlaylist] = useState();
    const [success, setSuccess] = useState(false);

    const toggleSuccess = () => {
        setSuccess(false)
        document.body.style.overflow = 'unset';
    }

    if (success) {
        document.body.style.overflow = 'hidden'
    }
    
    useEffect(() => {
        //variables for access token
        var access_token;
        const hash = window.location.hash;

        //Extract token from url
        if (hash.includes('access_token')){
            access_token = hash.split('&').find(elem => elem.startsWith('#access_token')).split('=')[1];
        }
        setToken(access_token);
        // eslint-disable-next-line
    }, [])

    const fetchPlaylists = async () => {
        await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {'Authorization': 'Bearer ' + token}
        }).then(response => response.json())
        .then(data => setPlaylists(data.items))
        .catch(e => console.error(e))
    }

    useEffect(() => {
        fetchPlaylists();
        // eslint-disable-next-line
    }, [token])

    return (
        <>
        <div className='bg-black-500 pt-7 min-h-screen p-5'>
            {success && 
                <Feedback toggle={toggleSuccess} />
            }
            <img className='w-1/2 mb-5 max-w-xs' alt='spotify logo' src={logo} />
            <h1 className='text-white text-center text-2xl font-bold'>Choose your playlist</h1>
            {playlists &&
                <div className='grid grid-cols-1 bg-black-500 text-white xl:grid-cols-3 gap-4 place-content-center mt-7 sm:grid-cols-2'> 
                    {playlists.map((item, i) => (
                        <button onClick={() => setClickedPlaylist(item)} key={i} className='flex items-center justify-between hover:bg-black-400 p-2 rounded-md h-fit'>
                            <img className='w-32 h-32 sm:w-48 sm:h-48 rounded-sm' src={item.images[0].url} alt='playlist cover' />
                            <h3 className='font-bold mx-auto'>{item.name}</h3>
                        </button>
                    ))}
                </div>
            }
        </div>
        { clickedPlaylist &&
            <Songs playlist={clickedPlaylist} token={token} toggle={setClickedPlaylist} success={setSuccess} />
        }
        </>
    )
}

export default Shuffle