const express = require("express");
const PeliculaSchema = require("../models/pelicula");
const router = express.Router();

//Crear pelicula
router.post("/add", (req, res) => {
    const pelicula = PeliculaSchema(req.body);
    pelicula
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
  });
  
  //Get películas.
  router.get("/findAll", (req, res) => {
    PeliculaSchema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
  });
  
  //Obtener película por id.
  router.get("/findById/:id", (req, res) => {
    PeliculaSchema
      .findById({_id: req.params.id})
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
  });
  
  //Update película.
  router.put("/updateById/:id", (req, res) => {
      const { name, year } = req.body;
      PeliculaSchema
        .findByIdAndUpdate({_id: req.params.id}, { $set: {name, year}})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
    });
  
  //Borrar película.
  router.delete("/deleteById/:id", (req, res) => {
      const { id } = req.params;
      PeliculaSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
    });
  
  module.exports = router;