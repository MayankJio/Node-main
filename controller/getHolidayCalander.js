async function  getHolidayCalander (req, res) {
    const arr = ['15th August / Sunday - Independence Day', '10th September / Friday - Ganesh Chaturthi', '2nd October / Saturday - Gandhi Jayanti']
    try {
        res.send(arr)
    } catch (e) {
        res.status(500).send(e)
    }

}

module.exports.getHolidayCalander = getHolidayCalander