export const SingleSong = ({ song, index, onVote, onDelete }) => {
  return (
    <div className="song-card">
      <div className="song-card-title">
        <span>#{index + 1} {song.title}</span>
        {song.spotifyUrl && (
          <a href={song.spotifyUrl} target="_blank" rel="noreferrer" className="spotify-link">
            ▶ Spotify
          </a>
        )}
      </div>
      <div className="song-card-body">
        <div className="song-artist">👤 {song.artist}</div>
        <div className="vote-row">
          <button
            className="win-btn banger"
            onClick={() => onVote(song._id, "banger")}
          >
            🔥 BANGER
          </button>
          <span className="vote-count">{song.bangerVotes}</span>

          <button
            className="win-btn cringe"
            onClick={() => onVote(song._id, "cringe")}
          >
            💀 CRINGE
          </button>
          <span className="vote-count cringe-count">{song.cringeVotes}</span>

          <button
            className="win-btn delete-btn"
            onClick={() => onDelete(song._id)}
          >
            ✕ Delete
          </button>
        </div>
      </div>
    </div>
  )
}
