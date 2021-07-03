require('dotenv').config()
const express = require('express')

const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const app = express()

app.use('/api', router);

async function start() {
  try {
    app.listen(PORT, () => console.log(`PORT: ${PORT}`))
  } catch(e) {
    console.log('server error', e.message)
    process.exit(1)
  }
}

start()