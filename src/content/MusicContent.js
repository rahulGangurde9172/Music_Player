import React, { createContext, useState } from "react";
import img1 from '../assest/arigit-1.jpeg';
import img2 from '../assest/arigit-2.jpeg';
import img3 from '../assest/arigit-3.jpeg';
import img4 from '../assest/jubin.jpg';
import img5 from '../assest/alan-1.jpeg';
import img6 from '../assest/alan-2.webp';
import img7 from '../assest/marathi-2.jpeg';
import img8 from '../assest/marathi-3.jpeg';


import song1 from '../assest/Ve_Kamleya.mp3';
import song2 from '../assest/Dil ab Kahan hai jo dobara de de kisi ko hum.mp3';
import song3 from '../assest/O Maahi.mp3';
import song4 from '../assest/Man-Bavarlay.mp3';
import song5 from '../assest/Kevadyacha-Paan-Tu.mp3';
import song6 from '../assest/Alan Walker - Faded.mp3';
import song7 from '../assest/Alan x Walkers - By Your Side.mp3';



export const Songplayer = createContext();

export const SongProvider = ({ children }) => {
    const songs = [
        { songTitle: 'Ve Kamaleya', 
         img:img1,
        song:song1,
        artist: 'Arijit singh' },
        { songTitle: 'Dil ab Kahan hai jo dobara de de kisi ko hum',
            img:img4,
            song:song2,
         artist: 'jubin nautiyal' },
        { songTitle: 'O Mahi',
            img:img2,
            song:song3,
         artist: 'Arijit singh' },

         { songTitle: 'Man Bavarlay ',
            img:img8,
            song:song4,
         artist: 'Aniket Jadhav,Gauri Tidke' },
         { songTitle: 'Kevadyacha Paan Tu ',
            img:img7,
            song:song5,
         artist: ' Ajay Gogavale,Aarya Ambeka' },

         { songTitle: 'Faded',
            img:img5,
            song:song6,
         artist: 'Alan Walker' },

         { songTitle: ' By Your Side',
            img:img6,
            song:song7,
         artist: 'Alan x Walkers' },
    ];

    const [currentSongIndex, setSongIndex] = useState(0);

    const nextSong = () => {
        setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const prevSong = () => {
        setSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length); 
    };

    const setCurrentSong = (index) => {
        setSongIndex(index);
    };
    return (
        <Songplayer.Provider value={{
            song: songs[currentSongIndex], 
            songs,
            nextSong,
            setCurrentSong,
            prevSong,
            currentSongIndex
        }}>
            {children}
        </Songplayer.Provider>
    );
};
