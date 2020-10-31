const router = require('express').Router()
const commentCtrl = require('../controllers/comments')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:projectId/comments', checkAuth,  commentCtrl.index)
router.post('/:projectId/comments', checkAuth,  commentCtrl.createComment)
router.delete('/:projectId/comments/:commentId', checkAuth,    commentCtrl.deleteComment)
router.put('/:projectId/comments/:commentId', checkAuth,  commentCtrl.updateComment)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router