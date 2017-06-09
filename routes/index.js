
'use strict'

const routeHelpers = require('./_helpers')
const router = require('express').Router()

router.get('/', (req, res) => {
	routeHelpers.handleResponse(res, 200, 'success')
})

module.exports = router