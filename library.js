const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = library.playlists;

  for (const entry of Object.keys(playlists)) {
    const playlist = playlists[entry];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks;

  for (const entry of Object.keys(tracks)) {
    const track = tracks[entry];

    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlists = library.playlists;
  const tracks = library.tracks;
    
  const playlist = playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  for (const trackEntry of playlist.tracks) {
    const track = tracks[trackEntry];

    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const id = generateUid();
  library.tracks[id] = {
    id: id,
    name,
    artist,
    album
  };
};


// adds a playlist to the library
const addPlaylist = function(name) {
  const id = generateUid();
  library.playlists[id] = {
    id: id,
    name,
    tracks: []
  };
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  const tracks = library.tracks;

  for (const entry of Object.keys(tracks)) {
    const track = tracks[entry];
    if (track.name.search(query) !== -1 || track.artist.search(query) !== -1 || track.album.search(query) !== -1) {
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  }
};

printPlaylists();
printTracks();
printPlaylist("p01");
addTrackToPlaylist("t01", "p01");
console.log("--After insert--");
printPlaylist("p01");
addTrack("Cool Name", "Cool Artist", "Cool Album");
printTracks();
addPlaylist("Super Cool Playlist");
printPlaylists();
printSearchResults(/\bmonkey\b/i); // regex for whole word and case insensitive, could use .toLowerCase for each item alternatively
printSearchResults(/three/i); // case insensitive tri