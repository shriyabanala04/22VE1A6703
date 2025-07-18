import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import './index.css';


function App() {
  const [longurls, setlongUrls] = useState('');
  const [shorturls, setshortUrls] = useState('');
  const [error, seterror] = useState('');

  const handleshorten = async () => {
    try {
      const response = await axios.get("https://tinyurl.com /api-create.php?url=" + $longurls);
      setshortUrls(response.data);
      seterror('');
    } catch (err) {
      console.error('Error shortening URL:', error);
      setshortUrls('');
      seterror('Failed to shorten URL. Please try again.');
    }
    return(
        
    <div className="body">
      <h1 className="h1"><b>React URL Shortener</b></h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL to shorten"
          required
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="form"
        /><br />
        <button type="submit" className="btn"><b>Shorten URL</b></button>
      </form>

      {shortUrl && (
        <p style={{ marginTop: '20px' }}>
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    )
  };
  export default App;