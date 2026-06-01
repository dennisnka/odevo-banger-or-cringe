import express from "express"
import Song from "../models/Song.js"

const router = express.Router()

router.get("/", (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.post("/", (req, res) => {
  const { title, artist, spotifyUrl } = req.body
  const newSong = new Song({ title, artist, spotifyUrl })

  newSong.save()
    .then(song => res.status(201).json(song))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.patch("/:id/banger", (req, res) => {
  const { id } = req.params
  const { title, artist, spotifyUrl } = req.body 

  Song.findByIdAndUpdate(id, { $inc: { bangerVotes: 1 } }, { new: true })
    .then(song => res.json(song))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.patch("/:id/cringe", (req, res) => {
  const { id } = req.params
  const { title, artist, spotifyUrl } = req.body 

  Song.findByIdAndUpdate(id, { $inc: { cringeVotes: 1 } }, { new: true })
    .then(song => res.json(song))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.delete("/:id", (req, res) => {
  const { id } = req.params

  Song.findByIdAndDelete(id)
    .then(() => res.json({ message: "Song deleted" }))
    .catch(err => res.status(500).json({ error: err.message }))
})

export default router
