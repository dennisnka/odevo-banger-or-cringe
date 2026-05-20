import { useState } from "react"

const API = "http://localhost:9000/api"

export const PostSong = ({ onSongPosted }) => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [spotifyUrl, setSpotifyUrl] = useState("")
  const [error, setError] = useState(null)
  const [status, setStatus] = useState("Ready")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title || !artist) {
      setError("⚠️ Title and Artist are required!")
      return
    }
    setError(null)
    setStatus("Posting...")

    fetch(`${API}/songs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, artist, spotifyUrl })
    })
      .then(() => {
        setTitle("")
        setArtist("")
        setSpotifyUrl("")
        setStatus("Posted! ✔")
        onSongPosted()
      })
      .catch(() => {
        setError("⚠️ Could not reach backend!")
        setStatus("Error")
      })
  }

  return (
    <>
      <p className="section-header">📀 ADD A SONG</p>
      <div className="panel">
        <div className="panel-title">
          New Song Entry <span>[ Form ]</span>
        </div>
        <div className="panel-body">
          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field-label">Song Title:</div>
            <input
              className="win-input"
              type="text"
              placeholder="e.g. Wannabe"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="field-label">Artist:</div>
            <input
              className="win-input"
              type="text"
              placeholder="e.g. Spice Girls"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />

            <div className="field-label">Spotify URL (optional):</div>
            <input
              className="win-input"
              type="text"
              placeholder="https://open.spotify.com/..."
              value={spotifyUrl}
              onChange={(e) => setSpotifyUrl(e.target.value)}
            />

            <div className="btn-row">
              <button className="win-btn" type="submit">
                Submit →
              </button>
            </div>
          </form>
        </div>
        <div className="status-bar">
          <span>{status}</span>
        </div>
      </div>
    </>
  )
}
