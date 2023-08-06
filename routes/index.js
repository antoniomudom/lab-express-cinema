const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movie.find()
    // .select({ title: 1 })
    .then((movies) => {
        console.log(movies)
        res.render("movies", {
            movies
        })
    })
    .catch((error) => {
      next(error)
    })
})
router.get("/movies/:id", (req,res,next)=>{

    let movieId= req.params.id;
    console.log(movieId)
    Movie.findById(movieId)
    .then((response)=>{
        res.render("movies-details.hbs", {
            
            movies: response
        })


    })
    .catch((error)=>{
        next(error)
    })
})


module.exports = router;



