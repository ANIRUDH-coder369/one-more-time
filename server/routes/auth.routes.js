const { signin, registerEmployee, signout, sendotp, verifyOtp, forgetPassword, changePassword } = require('../controller/auth.controller.js')

const router = require('express').Router()

router
    .post('/signin', signin)
    .post('/registerEmployee', registerEmployee)
    .post('/signout', signout)
    .post('/sendotp', sendotp)
    .post('/verifyOtp', verifyOtp)
    .post('/forgetPassword', forgetPassword)
    .post('/changepassword', changePassword)

module.exports = router