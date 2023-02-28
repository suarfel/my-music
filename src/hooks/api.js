const FIREBASE_DOMAIN = "https://my-music-fef3d-default-rtdb.firebaseio.com";

export async function getAllSongs() {
  const response = await fetch(`${FIREBASE_DOMAIN}/songs.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch songs.');
  }

  const transformedSongs = [];

  for (const key in data) {
    const songObj = {
      id: key,
      ...data[key],
    };

    transformedSongs.push(songObj);
  }

  return transformedSongs;
}

export async function getSingleSong(songId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/songs/${songId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch song.');
  }

  const loadedSong = {
    id: songId,
    ...data,
  };

  return loadedSong;
}

export async function addSong(songData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/songs.json`, {
    method: 'POST',
    body: JSON.stringify(songData),
    headers: {
      'Content-Type': 'application/json',
    },
   
  });
  console.log(response);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create song.');
  }

  return null;
}

export  async function deleteSong(songId) {
  console.log(true);
  const response = await fetch(`${FIREBASE_DOMAIN}/songs/${songId}.json`,{method : 'DELETE'});
  console.log(response);
  const data  = response.json();
  if (!response.ok){
    throw new Error(data.message || 'could not delete song')
  }
  return null;
}
