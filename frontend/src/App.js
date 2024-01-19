import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="video-responsive">

      {/* YoutubeLive */}
      <iframe
       width="560" 
      height="315"
      src="https://www.youtube.com/embed/jfKfPfyJRdk?si=KMMbn5ZsvLrrAH_9"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
      </iframe>

      {/* Twitch */}
      {/* Must add website domain */}
      <iframe 
      src="https://player.twitch.tv/?channel=gamesdonequick&parent=localhost" 
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      height="378"
      width="620">
      </iframe>
  </div>
  );
}

export default App;
