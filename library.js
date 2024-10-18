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
  },
  printPlaylists: function() {
    const playlists = this.playlists;

    for (const entry of Object.keys(playlists)) {
      const playlist = playlists[entry];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    const tracks = this.tracks;

    for (const entry of Object.keys(tracks)) {
      const track = tracks[entry];

      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function(playlistId) {
    const playlists = this.playlists;
    const tracks = this.tracks;

    const playlist = playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackEntry of playlist.tracks) {
      const track = tracks[trackEntry];

      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = {
      id: id,
      name,
      artist,
      album
    };
  },
  addPlaylist: function(name) {
    const id = this.generateUid();
    this.playlists[id] = {
      id: id,
      name,
      tracks: []
    };
  },
  printSearchResults: function(query) {
    const tracks = this.tracks;

    for (const entry of Object.keys(tracks)) {
      const track = tracks[entry];
      if (track.name.search(query) !== -1 || track.artist.search(query) !== -1 || track.album.search(query) !== -1) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t01", "p01");
console.log("--After insert--");
library.printPlaylist("p01");
library.addTrack("Cool Name", "Cool Artist", "Cool Album");
library.printTracks();
library.addPlaylist("Super Cool Playlist");
library.printPlaylists();
library.printSearchResults(/\bmonkey\b/i); // regex for whole word and case insensitive, could use .toLowerCase for each item alternatively
library.printSearchResults(/three/i); // case insensitive tri
