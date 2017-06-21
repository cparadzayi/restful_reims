
'use strict'

const passport = require('../auth/passport')
const routeHelpers = require('./_helpers')

const router = require('express').Router()

router.get('/', (req, res) => {
	routeHelpers.handleResponse(res, 200, 'success')
})

router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json('The fact that you saw tis means you are authenticated')
})

module.exports = router
