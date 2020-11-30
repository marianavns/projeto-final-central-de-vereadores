require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/councilorsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
// router.get('/', controller.getByConclusion)

// router.delete('', controller.delete)
// router.delete('/', controller.delete)
// router.put('/:id', controller.update)

module.exports = router
