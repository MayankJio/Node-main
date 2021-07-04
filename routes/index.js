const express = require('express')
const router = express.Router()


const absentController = require('../controller/getAbsent')
const absentDetailsController = require('../controller/getAbsentDetails')
const leaveBalanceController = require('../controller/getLeaveBalance')
const holidayCalenderController = require('../controller/getHolidayCalander')


router.get('/absentDays', async (req, res) => {

    absentController.getAbsent(req, res)


})

router.get('/absentDetails', async (req, res) => {
    absentDetailsController.getAbsentDetails(req, res)

})

router.get('/holidayCalander', async (req, res) => {
    holidayCalenderController.getHolidayCalander(req, res)
   

})

router.get('/leaveBalance', async (req, res) => {
    leaveBalanceController.getLeaveBalance(req, res)
    

})

module.exports = router

