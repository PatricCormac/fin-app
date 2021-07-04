const xlsxFile = require('read-excel-file/node')

class Data {
  async getData(req, res) {
    const data = await xlsxFile("./data/data.xlsx")
    return res.send(data)
  }
}

module.exports = new Data();