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

  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    res.json(true);
  });
});

 router.delete("/api/notes/:id",(req, res) => {
  var noteTitle = req.params.id;
  let delNoteFound = false;
  for (j=0; j < db.length; j++) {
    if (db[j].id == noteTitle) {
        db.splice(j, 1);
        console.log("Note with id= ", noteTitle, " is deleted");
        delNoteFound = true;
    }
  }
  if(delNoteFound){
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) =>{
      if (err) throw err;
      res.send();
    })
  }
  
});

module.exports = router;
