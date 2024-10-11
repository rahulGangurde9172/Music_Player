import React, { useContext, useState, useEffect, useRef } from 'react';
import { Songplayer } from '../content/MusicContent';
import { FaPause, FaPlay } from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import PlayList from './PlayList';

const MusicPlayer = () => {
    const { song, nextSong, prevSong, songs, setCurrentSong } = useContext(Songplayer);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(new Audio());
    const [ListVisible, setListVisible] = useState(false);

    useEffect(() => {
        audioRef.current.src = song.song;
        audioRef.current.load();

        const onLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
        };

        audioRef.current.addEventListener('loadedmetadata', onLoadedMetadata);

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        return () => {
            audioRef.current.pause();
            audioRef.current.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [song, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        const updateTime = () => setCurrentTime(audio.currentTime);
        audio.addEventListener('timeupdate', updateTime);

        return () => audio.removeEventListener('timeupdate', updateTime);
    }, []);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const calculateProgress = () => {
        return (currentTime / duration) * 100;
    };

    const handlePlayList = () => {
        setListVisible(!ListVisible);
    };

    const handleSongClick = (index) => {
        setCurrentSong(index); // Update the current song in context
        setIsPlaying(true); // Play the selected song
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.leftIcon}>
                        {!ListVisible ? (
                            <GiHamburgerMenu style={styles.backIcon} onClick={handlePlayList} />
                        ) : (
                            <FaXmark style={styles.backIcon} onClick={handlePlayList} />
                        )}
                    </div>
                    {/* <div style={styles.centerText}>rahul</div> */}
                    <div style={styles.rightIcon}>
                        <div>Made By Rahul !</div>
                        {/* Add any right-side icon or other content here */}
                    </div>
                </div>

                {ListVisible ? (
                    <PlayList handleSongClick={handleSongClick} />
                ) : (
                    <>
                        <div style={styles.albumArtContainer}>
                            <img src={song.img} alt="Album Art" style={styles.albumArt} />
                        </div>
                        <div>{song.songTitle}</div>
                        <div style={styles.artist}>{song.artist}</div>
                        <div style={styles.progressBar}>
                            <div style={{ ...styles.progress, width: `${calculateProgress()}%` }}></div>
                        </div>
                        <div style={styles.time}>{formatTime(currentTime)}</div>
                        <div style={styles.controls}>
                            <IoPlaySkipBackSharp style={styles.controlIcon} onClick={prevSong} />
                            {isPlaying ? (
                                <FaPause style={styles.controlIcon} onClick={handlePlayPause} />
                            ) : (
                                <FaPlay style={styles.controlIcon} onClick={handlePlayPause} />
                            )}
                            <IoPlaySkipForward style={styles.controlIcon} onClick={nextSong} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: '20px',
        width: '354px',
        height: '100vh',
        padding: '20px',
        color: '#FFF',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 0',
        marginBottom:'1rem'
    },
    leftIcon: {
        flexBasis: '10%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    centerText: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#FFF',
    },
    rightIcon: {
       
        display: 'flex',
        justifyContent: 'flex-end',
        fontWeight:'700',
        color: '#FFD700',
        width:'10rem',
        opacity:'.5'
    },
    backIcon: {
        color: '#FFD700',
        fontSize: '20px',
        cursor: 'pointer',
    },
    albumArtContainer: {
        marginBottom: '10rem',
    },
    albumArt: {
        borderRadius: '50%',
        width: '250px',
        height: '250px',
    },
    progressBar: {
        width: '100%',
        height: '5px',
        backgroundColor: '#666',
        borderRadius: '3px',
        overflow: 'hidden',
        marginTop: '10px',
    },
    progress: {
        height: '100%',
        backgroundColor: '#FFD700',
        transition: 'width 0.1s linear',
    },
    time: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#AAA',
    },
    artist: {
        fontSize: '14px',
        color: '#AAA',
        marginTop: '5px',
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px',
    },
    controlIcon: {
        color: '#FFD700',
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default MusicPlayer;
