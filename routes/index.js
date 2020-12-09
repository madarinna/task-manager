var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');

let {isLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

/* GET home page. */
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', isLoggedIn, user.logout);
router.get('/logout', isLoggedIn, user.logout);

router.get('/', isLoggedIn, landing.get_landing);
router.post('/', isLoggedIn, landing.submit_main);
router.get('/tasks', isLoggedIn, landing.show_tasks);
router.get('/task/:task_id', isLoggedIn, landing.show_task);
router.get('/task/:task_id/edit', isLoggedIn, landing.show_edit_task);
router.post('/task/:task_id/edit', isLoggedIn, landing.edit_task);
router.post('/task/:task_id/delete', hasAuth, landing.delete_task);
router.post('/task/:task_id/delete-sub', hasAuth, landing.delete_subtask);
router.post('/task/:task_id/delete-json', hasAuth, landing.delete_task_json);
router.post('/task/:task_id/delete-sub-json', hasAuth, landing.delete_subtask_json);
router.post('/task/:task_id/done-task', isLoggedIn, landing.doneTask);
router.post('/task/:task_id/undone-task', isLoggedIn, landing.undoneTask);
router.post('/task/:task_id/done-subtask', isLoggedIn, landing.doneSubtask);
router.post('/task/:task_id/undone-subtask', isLoggedIn, landing.undoneSubtask);
router.get('/task/:task_id/add-subtask', isLoggedIn, landing.show_submit_sub);
router.post('/task/:task_id/add-subtask', isLoggedIn,landing.submit_sub);
router.get('/done', isLoggedIn, landing.show_done);
module.exports = router;
