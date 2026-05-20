import { SingleSong } from "./SingleSong"

export const SongList = ({ songList, loading, error, onVote, onDelete }) => {
  if (loading) {
    return <div className="loading">⏳ Connecting to server... waiting for your backend!</div>
  }

  if (error) {
    return (
      <>
        <div className="error-box">⚠️ {error}</div>
        <div className="loading">💡 Tip: Run <strong>node server.js</strong> in your backend folder</div>
      </>
    )
  }

  if (songList.length === 0) {
    return <div className="loading">No songs yet — be the first to post one!</div>
  }

  return (
    <div className="list-wrapper">
      {songList.map((song, index) => (
        <SingleSong
          key={song._id}
          song={song}
          index={index}
          onVote={onVote}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
