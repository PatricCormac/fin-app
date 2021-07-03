const Router = require('express');
const router = new Router();
const dataController = require('../constrollers/dataController')

router.get('/', dataController.getData)

module.exports = router;