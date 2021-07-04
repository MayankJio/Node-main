async function  getLeaveBalance (req, res) {

    const arr = ['CL/Contingency Leave - 6 - 31/12/2021', 'Optional Holiday - 3 - 31/12/2021', 'Special Privilege Leave - 10 - 31/12/2021']
    try {
        res.send(arr)
    } catch (e) {
        res.status(500).send(e)
    }

}

module.exports.getLeaveBalance = getLeaveBalance