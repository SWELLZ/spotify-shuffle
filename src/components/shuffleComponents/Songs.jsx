import React, { useEffect, useState } from 'react'

const Songs = ({ playlist, token }) => {
    const [playlistDetails, setPlaylistDetails] = useState([]);

    const fetchPlaylistItems = async () => {
        await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(response =>
            response = response.json()
        ).then(data =>
            setPlaylistDetails(data.items)
        )
    }

    useEffect(() => {
        fetchPlaylistItems();
    }, [playlist])

    return (
        <div className='min-h-screen bg-black-500 text-white p-5'>
            <h1 className='text-center text-2xl font-bold'>{playlist.name}</h1>
            <div>
                <table className='mx-auto'>
                    <thead className='text-left'>
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                    </thead>
                    {playlistDetails.map((item, i) => (


                        <tbody key={i}>
                            <td>{i + 1}</td>
                            <td className='flex items-center'>
                                <img src={item.track.album.images[2].url} alt='track cover' />
                                <div>
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