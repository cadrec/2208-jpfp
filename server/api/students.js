const router = require("express").Router();
const { Student, Campus } = require("../db");
//get
router.get("/", async(req, res, next) => {
    try{
        res.send(await Student.findAll({
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
            res.send(Student);
        }
    } catch (err) {
          next(err);
    }
})
//post
router.post('/', async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        res.send(newStudent);
    } catch(err){
        next(err);
    }
})
//put
//delete
router.delete('/:studentId', async (req, res, next) => {
    try{
        const studentToRemove = await Student.findByPk(req.params.id);
        if(!studentToRemove){
            let err = new Error('Cannot remove student because student is not found');
            err.status = 404;
            next(err);
        }
        else {
            await studentToRemove.destroy();
            res.sendStatus(204);
        }
    } catch (err) {
        next(err);
    }
})