# 🎵 Banger or Cringe

Rate songs as bangers or cringe. A fullstack app built with React, Express and MongoDB.

## Project structure

```
banger-or-cringe/
├── frontend/   ← React + Vite
└── backend/    ← Express + MongoDB
```

---

## Getting started

### Backend

```bash
cd backend
npm install
```

Copy the example env file and fill in your MongoDB connection string:

```bash
cp .env.example .env
```

Start the server:

```bash
npm run dev
```

The server runs on http://localhost:9000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on http://localhost:5173 and connects to the backend on port 9000.

---

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/songs | Get all songs |
| POST | /api/songs | Add a new song |
| PATCH | /api/songs/:id/banger | Add one banger vote |
| PATCH | /api/songs/:id/cringe | Add one cringe vote |
| DELETE | /api/songs/:id | Delete a song |

### Example POST body

```json
{
  "title": "Wannabe",
  "artist": "Spice Girls",
  "spotifyUrl": "https://open.spotify.com/track/..."
}
```
