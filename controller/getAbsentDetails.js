async function  getAbsentDetails (req, res) {

    const arr = ['1/6/2021', '2/6/2021', '3/6/2021', '4/6/2021']
    try {
        res.send(arr)
    } catch (e) {
        res.status(500).send(e)
    }

}

module.exports.getAbsentDetails = getAbsentDetails