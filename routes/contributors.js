const router = require('express').Router()
const contributorCtrl = require('../controllers/contributors')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/:projectId', checkAuth, contributorCtrl.createContributor)

router.delete('/:projectId/:contributorId/:userId', checkAuth, contributorCtrl.deleteContributor)
router.put('/:contributorId', checkAuth, contributorCtrl.updateContributor)
router.get('/projects', checkAuth, contributorCtrl.showLoggedInUserProjects)
router.get('/:projectId', checkAuth, contributorCtrl.index)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router