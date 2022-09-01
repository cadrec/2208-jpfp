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
router.get('/:studentId', async (req, res, next) => {
    try{
        const campus = await Campus.findByPk(req.params.id, {
            include: Student
        });
        if(!campus) {
            let err = new Error('No player found with that ID');
            err.status = 404;
            next(err);
        } else {
            res.send(Campus);
        }
    } catch (err) {
          next(err);
    }
})
//post
router.post('/', async (req, res, next) => {
    try {
        const newCampus = await Campus.create(req.body);
        res.send(newCampus);
    } catch(err){
        next(err);
    }
})
//put
//delete
router.delete('/:campusId', async (req, res, next) => {
    try{
        const campusToRemove = await Campus.findByPk(req.params.id);
        if(!CampusToRemove){
            let err = new Error('Cannot remove student because student is not found');
            err.status = 404;
            next(err);
        }
        else {
            await CampusToRemove.destroy();
            res.sendStatus(204);
        }
    } catch (err) {
        next(err);
    }
})