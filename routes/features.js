const router = require('express').Router()
const featureCtrl = require('../controllers/features')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:projectId', checkAuth, featureCtrl.index)
router.get('/:projectId/features/:featureId', checkAuth, featureCtrl.showFeature)
router.post('/:projectId', checkAuth,  featureCtrl.createFeature)
router.delete('/:featureId', checkAuth,    featureCtrl.deleteFeature)
router.put('/:featureId', checkAuth,  featureCtrl.updateFeature)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router