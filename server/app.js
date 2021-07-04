require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
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