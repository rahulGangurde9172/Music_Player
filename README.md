# 🎵 React Music Player

A responsive and interactive music player built using React that lets users enjoy songs with ease. This project features a playlist, playback controls, and an attractive UI with album art and song details.

## 🛠 Features

- **Play/Pause Controls**: Easily play or pause the current song with intuitive icons.
- **Next/Previous Navigation**: Move to the next or previous song in the playlist.
- **Playlist View**: Access a complete list of songs, and select any song to play directly from the list.
- **Progress Bar**: Visual indication of song progress with real-time updates.
- **Responsive Design**: Optimized for mobile and desktop viewing.
- **Styled Components**: Clean and cohesive styling using inline styles and React icons.

## 🔧 Technologies Used

- **React**: Component-based library for building the user interface.
- **React Hooks**: Utilizes `useState`, `useContext`, `useEffect`, and `useRef` for state management and side effects.
- **React Icons**: Font Awesome and other icons for interactive controls.
- **Context API**: Manages global state across components with `SongProvider`.

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahulGangurde9172/react-music-player.git
   
   cd react-music-player
   
 ## 🎨 Components Overview

- **App**: The root component that wraps the `MusicPlayer` inside the `SongProvider`. This ensures that the entire application has access to the global state managed by the `SongProvider`.
  
- **MusicPlayer**: This component is responsible for handling playback controls, such as play, pause, next, and previous. It also displays album art, song title, and artist details. Navigation between songs is managed here, and it uses the context to update and retrieve song data.

- **PlayList**: This component renders a list of all available songs in the playlist. It highlights the currently playing song and allows users to select a different song to play by clicking on it.

- **SongProvider**: This is a context provider that manages the global state for the music player. It keeps track of the song list, the current song, and provides functions to navigate between songs. The `SongProvider` makes these properties and methods accessible to components within its context, ensuring consistent state management throughout the app.

## 📁 Project Structure

- **`src/`**: The main source folder containing all the application code.
  - **`components/`**: Contains the primary components of the music player, such as:
    - **`MusicPlayer`**: Manages playback controls, displays album art, and handles song navigation.
    - **`PlayList`**: Renders the playlist, allowing users to see and select songs.
  - **`content/`**: Includes the `SongProvider` component for global state management, which provides song data and controls for playback across the app.
  - **`assest/`**: Holds all media files such as:
    - **Audio files**: Songs in `.mp3` format.
    - **Images**: Album artwork images associated with each song.


