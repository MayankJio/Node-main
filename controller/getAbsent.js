async function  getAbsent (req, res) {
    try {
        res.send('9')
    } catch (e) {
        res.status(500).send(e)
    }

}

module.exports.getAbsent = getAbsent