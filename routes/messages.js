const router = require('express').Router()
const messageCtrl = require('../controllers/messages')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:userId/messages', checkAuth, messageCtrl.index)
router.post('/:userId/messages', checkAuth, messageCtrl.createMessage)
router.delete('/:userId/messages/:messageId', checkAuth, messageCtrl.deleteMessage)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router