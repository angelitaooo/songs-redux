import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'trouble', duration: '2:15' },
    { title: 'shiver', duration: '3:10' },
    { title: 'fix you', duration: '1:15' },
    { title: 'yellow', duration: '4:00' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
