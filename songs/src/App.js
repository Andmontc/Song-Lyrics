import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/form';
import Axios from 'axios';

function App() {

  const [lyrics, saveLyrics] = useState({});
  const [lyric, saveLyric ] = useState('');

  useEffect(() => {
    if (Object.keys(lyrics).length === 0) return;
    const ApiLyrics = async() => {
      const {artist, song} = lyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await Axios(url);
      saveLyric(result.data.lyrics);
    }
    ApiLyrics();
  }, [lyrics])
  return (
    <Fragment>
      <Form 
        saveLyrics={saveLyrics}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col md-6">
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
