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
  db.map((element) => {
    element.id = db.indexOf(element);
  });
  console.log(db)
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    res.json(true);
  });
});

router.delete("/api/notes/:id", (req, res) => {
  var noteTitle = req.params.id;
  console.log(db[noteTitle])
  console.log(db[0])
  var allNoteID = db.filter((note) => note.id != noteTitle );
  fs.writeFile("./db/db.json", JSON.stringify(allNoteID), (err) =>{
    if (err) throw err;
    res.send();
  })
  
  
});

module.exports = router;
