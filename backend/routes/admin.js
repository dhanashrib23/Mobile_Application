const express = require("express");
const router = express.Router();
const conn = require("../db");
const multer = require("multer");
const path = require("path");

// fetch all users
router.get("/users", (request, response) => {
  const statement = `SELECT * FROM users`;
  conn.execute(statement, (err, rows) => {
    if (err) response.send(err.message);
    else if (rows.length === 0) response.send("no users found");
    else response.json({ status: "success", data: rows });
  });
});

// fetch user by id
router.get("/user/:id", (request, response) => {
  const { id } = request.params;
  const statement = `SELECT * FROM users WHERE id =?`;

  conn.execute(statement, [id], (err, rows) => {
    if (err) response.send(err.message);
    else if (rows.length === 0) response.send("no user found");
    else response.json({ status: "success", data: rows[0] });
  });
});

// fetch all mobiles
router.get("/mobiles", (request, response) => {
  const statement = `SELECT * FROM mobiles`;
  conn.execute(statement, (err, rows) => {
    if (err) response.send(err.message);
    else if (rows.length === 0) response.send("no mobiles found");
    else response.json({ status: "success", data: rows });
  });
});

// get mobile by id
router.get("/mobile/:id", (request, response) => {
  const { id } = request.params;
  const statement = `SELECT * FROM mobiles WHERE id =?`;

  conn.execute(statement, [id], (err, rows) => {
    if (err) response.send(err.message);
    else if (rows.length === 0) response.send("no mobile found");
    else response.json({ status: "success", data: rows[0] });
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// add mobile
router.post("/mobile", upload.single("image"), (request, response) => {
  const { mname, ram, storage, company, price } = request.body;
  const image = request.file ? request.file.filename : null;

  const statement = `INSERT INTO mobiles 
    (mname, ram, storage, company, price, image) 
    VALUES (?,?,?,?,?,?)`;

  conn.execute(
    statement,
    [mname, ram, storage, company, price, image],
    (err, result) => {
      console.log("error: " + err);

      if (err) return response.status(500).send(err.message);

      response.json({
        status: "success",
        message: "mobile added",
      });
    }
  );
});

module.exports = router;
