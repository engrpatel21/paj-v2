const router = require('express').Router()
const taskCtrl = require('../controllers/tasks')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:featureId', checkAuth, taskCtrl.index)
router.post('/:featureId', checkAuth, taskCtrl.createTask)
router.delete('/:featureId/:taskId/:status', checkAuth, taskCtrl.deleteTask)
router.put('/:boardId', checkAuth, taskCtrl.updateStatus)
router.put('/edit/:boardId', checkAuth, taskCtrl.updateTask)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router