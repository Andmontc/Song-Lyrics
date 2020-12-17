import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/form';
import Song from './components/song';
import Artist from './components/artist';
import axios from 'axios';

function App() {

  const [lyrics, saveLyrics] = useState({});
  const [lyric, saveLyric ] = useState('');
  const [infoartist, saveInfo] = useState({});

  useEffect(() => {
    if (Object.keys(lyrics).length === 0) return;
    const ApiLyrics = async () => {
      const {artist, song} = lyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, info] = await Promise.all([
          axios(url),
          axios(url2),
      ]);
      saveLyric(lyric.data.lyrics);
      saveInfo(info.data.artists[0]);
    }
    ApiLyrics();
  }, [lyrics]);
  
  return (
    <Fragment>
      <Form 
        saveLyrics={saveLyrics}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist
              infoartist={infoartist} 
            />
          </div>
          <div className="col-md-6">
            <Song
              lyric={lyric} 
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
