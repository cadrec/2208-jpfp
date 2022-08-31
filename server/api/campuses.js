const router = require("express").Router();
const { Student, Campus } = require("../db");

//get
router.get("/", async(req, res, next) => {
    try{
        res.send(await campus.findAll({
            include: Student
        }));
    }
    catch(err){
        next(err);
    }
})
//get
//post
//put
//delete