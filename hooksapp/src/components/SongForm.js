import React, { useState } from 'react';

const SongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song-name">Song name:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="song-name" required />
      </label>
      <input type="submit" value="Add song"/>
    </form>
  );
}
 
export default SongForm;