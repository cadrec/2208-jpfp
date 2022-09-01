const router = require("express").Router();
const { Student, Campus } = require("../db");
//get
router.get("/", async(req, res, next) => {
    try{
        res.send(await student.findAll({
            include: Campus
        }));
    }
    catch(err){
        next(err);
    }
})
//get
router.get('/:studentId', async (req, res, next) => {
    try{
        const student = await Student.findByPk(req.params.id, {
            include: Campus
        });
        if(!player) {
            let err = new Error('No player found with that ID');
            err.status = 404;
            next(err);
        } else {
            res.send(student);
        }
    } catch (err) {
          next(err);
    }
})
//post
//put
//delete