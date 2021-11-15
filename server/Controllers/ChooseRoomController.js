const router = require("express").Router();
const Class = require("../Models/Class");

router.get("/get-rooms", async (req, res) => {
    const rooms = await Class.find({}, (error, data) => {
        if (error) {
            console.log(error);
        } else {
        }
    })
        .clone()
        .catch(function (err) {
            console.log(err);
        });
    console.log(rooms);
    res.send(rooms);
});

module.exports = router;
