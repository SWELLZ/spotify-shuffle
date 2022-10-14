import React, { useEffect, useState } from 'react'

const Songs = ({ playlist, token, toggle }) => {
    const [playlistDetails, setPlaylistDetails] = useState([]);

    const confirmChanges = async () => {
        let updatedPlaylist = []
        playlistDetails.forEach(item => {
            updatedPlaylist.push('spotify:track:' + item.track.id)
        })
        
        let tempOriginal = [];
        let tempUpdated = [];

        for (let i = 0; i < playlistDetails.length; i += 100) {
            const originalChunk = playlistDetails.slice(i, i + 100);
            const updatedChunk = updatedPlaylist.slice(i, i + 100);
            tempOriginal.push(originalChunk)
            tempUpdated.push(updatedChunk)
        }
        
        for (let i = 0; i < tempOriginal.length; i++){
            let original = tempOriginal[i]
            original = original.map(item => ({'uri': item.track.uri}))
            let updated = tempUpdated[i]

            const updateOptions = {
                method: "POST",
                "Content-Type": "application/json",
                headers: {"Authorization": "Bearer " + token},
                body: JSON.stringify({
                    "uris": updated
                })
            }
    
            const deleteOptions = {
                method: "DELETE",
                "Content-Type": "application/json",
                headers: {"Authorization": "Bearer " + token},
                body: JSON.stringify({
                    tracks: original
                })
            }
            await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, deleteOptions)
            await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, updateOptions)
            
        }
    }

    const shufflePlaylist = () => {
        var list = playlistDetails
        var len = list.length;
        var i = -1;
        var j, k;

        while (++i < len){ //loops over list until completely shuffled
            j = Math.floor(Math.random() * len);
            k = Math.floor(Math.random() * len);
            var t = list[j];
            list[j] = list[k];
            list[k] = t;
        }
        setPlaylistDetails([...list]);
    }

    const fetchPlaylistItems = async () => {
        let items = [];
        let count;
        let offset = 0;
        do {
            let response = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks?offset=${offset}`, {
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(response => response.json());

            count = response.total;
            items = [...items, ...response.items];
            offset += 100;
        } while (items.length < count);
        setPlaylistDetails(items)
    }

    useEffect(() => {
        fetchPlaylistItems();
    }, [playlist])

    return (
        <div className='min-h-screen bg-black-500 text-white p-5 relative'>
            <p className='text-center'>Here is your playlist as it is, if you would like to randomize it, click the button below. When you're happy with your changes, click confirm changes to rearrange the playlist in Spotify</p>
            <div className='flex justify-center content-center my-3 gap-4'>
                <button onClick={shufflePlaylist} className='bg-green-500 transition-all duration-300 p-3 rounded-full w-1/6 text-black-500 font-bold hover:bg-green-600 text-center'>SHUFFLE</button>
                <button onClick={confirmChanges} className='p-3 rounded-full w-1/6 text-black-300 transition-all duration-300 font-bold text-center border-2 border-black-300 hover:bg-black-300 hover:text-white'>Confirm Changes</button>
                <button onClick={() => toggle(null)} className='underline hover:no-underline'>Cancel</button>
            </div>
            <div className='flex justify-center content-center my-3 gap-4'>
                
            </div>
            <h1 className='text-center text-2xl font-bold my-2'>{playlist.name}</h1>
            <div>
                <table className='mx-auto w-full'>
                    <thead className='text-left text-black-200 border-b-black-200 border-b'>
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                    </thead>
                    {playlistDetails.map((item, i) => (
                        <tbody className='hover:bg-black-400 rounded-full' key={i}>
                            <td className='pl-3'>{i + 1}</td>
                            <td className='flex items-center p-2'>
                                <img className='rounded-sm' src={item.track.album.images[2].url} alt='track cover' />
                                <div className='ml-4'>
                                    <p>{item.track.name}</p>
                                    <p className='text-sm text-black-200'>{item.track.artists[0].name}</p>
                                </div>
                            </td>
                            <td>{item.track.album.name}</td>
                        </tbody>

                    ))}
                </table>
            </div>
        </div>
    )
}

export default Songs