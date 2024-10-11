import React, { useContext } from 'react';
import { Songplayer } from '../content/MusicContent';

const PlayList = () => {
    const { songs, currentSongIndex, setCurrentSong } = useContext(Songplayer); // Destructure to get the full list of songs and current song index

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Your Playlist</h2>
            {songs.map((item, index) => (
                <div
                    style={{
                        ...styles.playlistContent,
                        backgroundColor: currentSongIndex === index ? '#444' : 'transparent', // Change background for selected song
                    }}
                    key={index}
                    onClick={() => setCurrentSong(index)}
                >
                    <h4 style={styles.songTitle}>{item.songTitle}</h4>
                    <p style={styles.artist}>{item.artist}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#333',
        borderRadius: '20px',
        width: '354px',
        height: '100vh',
        color: '#FFF',
        padding: '20px',
        boxSizing: 'border-box',
    },
    heading: {
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
    },
    playlistContent: {
        padding: '10px',
        borderBottom: '1px solid #555',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
    },
    songTitle: {
        fontSize: '12px',
        color: '#FFF',
        margin: '0',
    },
    artist: {
        fontSize: '11px',
        color: '#AAA',
        margin: '0',
    },
};

export default PlayList;
