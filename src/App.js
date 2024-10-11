import './App.css';
import MusicPlayer from './components/MusicPlayer';
import { SongProvider } from './content/MusicContent';

function App() {
  return (
    <div className="App">
      <SongProvider>
        <MusicPlayer />
      </SongProvider>
    </div>
  );
}

export default App;
