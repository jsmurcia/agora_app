const router = require('express').Router()
const auth = require('../middleware/auth')
const authTeacher = require('../middleware/authTeacher')
const controllerProject = require('../controllers/projects')

router.post('/new-project', authTeacher, controllerProject.create);
router.get('/get-project/:_id', auth, controllerProject.getProject);
router.get('/get-projects/:_id', auth, controllerProject.getProjects);
router.put('/update-project/:_id', authTeacher, controllerProject.updateProject);
router.delete('/delete-project/:_id', authTeacher, controllerProject.deleteProject);

module.exports = router
