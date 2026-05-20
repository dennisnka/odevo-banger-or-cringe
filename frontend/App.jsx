import { useState, useEffect } from "react"
import { SongList } from "./components/SongList"
import { PostSong } from "./components/PostSong"

const API = "http://localhost:9000/api"

export const App = () => {
  const [songList, setSongList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSongs = () => {
    setLoading(true)
    fetch(`${API}/songs`)
      .then((res) => res.json())
      .then((data) => {
        setSongList(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Could not connect to backend. Make sure your server is running on port 9000!")
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  const handleVote = (id, type) => {
    fetch(`${API}/songs/${id}/${type}`, { method: "PATCH" })
      .then(() => fetchSongs())
      .catch(() => alert("Could not reach backend!"))
  }

  const handleDelete = (id) => {
    fetch(`${API}/songs/${id}`, { method: "DELETE" })
      .then(() => fetchSongs())
      .catch(() => alert("Could not reach backend!"))
  }

  return (
    <div className="app">
      <div className="marquee-bar">
        <span className="marquee-inner">
          🎸 WELCOME TO BANGER OR CRINGE &nbsp;&nbsp;&nbsp; ★ POST YOUR SONG ★ VOTE NOW ★ IS IT A BANGER OR IS IT CRINGE? &nbsp;&nbsp;&nbsp; 🎸 WELCOME TO BANGER OR CRINGE &nbsp;&nbsp;&nbsp;
        </span>
      </div>

      <h1>🎵 BANGER OR CRINGE 🎵</h1>
      <p className="subtitle">★ THE ULTIMATE SONG VERDICT MACHINE v1.0 ★</p>

      <PostSong onSongPosted={fetchSongs} />

      <hr />
      <p className="section-header">🏆 SONG RANKINGS</p>

      <SongList
        songList={songList}
        loading={loading}
        error={error}
        onVote={handleVote}
        onDelete={handleDelete}
      />
    </div>
  )
}
