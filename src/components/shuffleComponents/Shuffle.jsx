import React, { useEffect, useState } from 'react'

const Shuffle = () => {
    const [token, setToken] = useState('');
    const [playlists, setPlaylists] = useState({});
    
    useEffect(() => {
        //variables for access token
        var access_token;
        const hash = window.location.hash;

        //Extract token from url
        if (hash.includes('access_token')){
            access_token = hash.split('&').find(elem => elem.startsWith('#access_token')).split('=')[1];
        }
        setToken(access_token);
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
    }, [token])
    useEffect(() => {
        console.log(playlists)
    }, [playlists])

    return (
        <>
        {playlists ?
            <div className='flex bg-black-500 text-white flex-wrap'> 
                {playlists.map((item, i) => (
                    <button key={i}>
                        <img className='w-48 h-48' src={item.images[0].url} alt='playlist cover' />
                        <h3 className='font-bold'>{item.name}</h3>
                    </button>
                ))}
            </div>
            :
            <div>
                <p>null</p>
            </div>
        }
        </>
    )
}

export default Shuffle