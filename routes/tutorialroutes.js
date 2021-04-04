module.exports = app => {
    const tutorials = require("../controller/tutorialController");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);
    router.get("/", tutorials.findAll);
    router.get("/published", tutorials.findAllPublished);

    router.get("/:id", tutorials.findOne)
    router.patch("/:id", tutorials.update)

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);



    app.use('/api/tutorials', router);
};