const express = require('express')
const router = express.Router()



router.route('/api')
.get((req, res) => {
    res.send('GET request')
  })
.post((req, res) => {
    res.send('POST request')
  })

  module.exports = router