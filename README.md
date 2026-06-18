# Top Inventory Application

This is a practice exercise of a CRUD and a live postgres and also deployed backend using express js.

![alt text](image.png)

## Tech Stack

- express js
- postgres (neon)

## Prequist

for local

```
HOST=
USER=
DATABASE=
PASSWORD=
PORT=""

APP_PORT=
```

for producation

```
NODE_ENV=
DATABASE_URL="YOUR NEON CREDENTIALS"
```

## Get Start

```
npm install
node --watch app.js
```

## ENDPOINTS

| Method | Endpoint                  | Description                         |
| ------ | ------------------------- | ----------------------------------- |
| GET    | `/`                       | Returns all genres on index page    |
| GET    | `/songs/:genre`           | Returns all songs filtered by genre |
| GET    | `/add-song/:genre`        | Displays add song form              |
| POST   | `/add-song/:genre`        | Adds a new song                     |
| POST   | `/delete-all`             | Deletes all songs in database       |
| GET    | `/edit-song/:id/:genre`   | Loads song data for editing         |
| POST   | `/edit-song/:id/:genre`   | Updates song by ID                  |
| POST   | `/delete-song/:id/:genre` | Deletes song by ID                  |
