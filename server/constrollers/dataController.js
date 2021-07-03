const xlsxFile = require('read-excel-file/node')

class Data {
  async getData(req, res) {
    const data = await xlsxFile("./data/data.xlsx")
    data.forEach((col)=>{
      col.forEach((data)=>{
        console.log(data);
        console.log(typeof data);
      })
    })
    return res.send(data)
  }
}

module.exports = new Data();