const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.get('/user', checkAuth, usersCtrl.showOneUser)
router.get('/projects', checkAuth, usersCtrl.showLoggedInUserProjects)
router.get('/projects/:userId', checkAuth, usersCtrl.getAllUserProjects)
router.put('/', checkAuth, usersCtrl.updateUser)
router.get('/:userId/another', checkAuth, usersCtrl.differentUser)
router.post('/friends', checkAuth, usersCtrl.addFriend)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;