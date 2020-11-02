const router = require('express').Router()
const projectCtrl = require('../controllers/projects')

router.use(require("../config/auth"));

router.get('/', checkAuth, projectCtrl.index)
router.get('/:projectId', checkAuth, projectCtrl.showProject)
router.post('/', checkAuth, projectCtrl.createProject)
router.delete('/:projectId', checkAuth, projectCtrl.deleteProject)
router.put('/:projectId', checkAuth, projectCtrl.updateProject)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router