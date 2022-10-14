import React, { useEffect, useState } from 'react'

const Songs = ({ playlist, token, toggle }) => {
    const [playlistDetails, setPlaylistDetails] = useState([]);

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
            <p className='text-center'>Here is your playlist as it is, if you would like to randomize it, click the button below</p>
            <button className='bg-green-500 p-4 rounded-full w-1/6 text-black-500 font-bold hover:bg-green-600 mt-3 text-center mx-auto'>SHUFFLE</button>
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