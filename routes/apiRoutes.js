const db = require("../db/db.json");

const fs = require("fs");

const express = require("express");

const router = express.Router();

router.get("/api/notes", function (req, res) {
  res.json(db);
});

router.post("/api/notes", function (req, res) {
  var newNote = req.body;
  db.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    res.json(newNote);
  });
});

router.delete("api/notes/:tile", (req, res) => {
  var noteTitle = req.params.title;
    console.log();
//   fs.readFile("../db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     const allNotes = JSON.parse(data);
//     const newAllNotes = allNotes.filter((note) => note.id != noteId);
//     fs.writeFile(
//       "../db/db.json",
//       JSON.stringify(newAllNotes, null, 2),
//       (err) => {
//         if (err) throw err;
//         res.send(db);
//       }
//     );
//   });
});

module.exports = router;
