var router = require('express').Router();
var taskController = require('../app/tasks/task.controller');

router.get('/list', taskController.list.bind(taskController));
router.get('/list/:category', taskController.listCategoryTasks.bind(taskController));

router.get('/categories', taskController.listCategory.bind(taskController));


router.post('/', taskController.create.bind(taskController));
router.get('/:id', taskController.read.bind(taskController));
router.put('/:id', taskController.update.bind(taskController));
router.delete('/:id', taskController.delete.bind(taskController));

module.exports = router;