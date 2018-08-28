const http = require('http')
const fs = require('fs')
const path = require('path')
const request = require('request')
const uuidv1 = require('uuid/v1')
const csv = require("csvtojson");

const csvToConvert = (url='https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data.csv') => {
  console.log('downloading CSV from', url)
  const fetchCsv = (urlF, callback) => {
    http.get(urlF, (response) => {
      let buff = ''
      response.on('data', (chunk) => {
        buff += chunk
      })
      response.on('end', () => {
        callback(null, buff)
      })
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`)
      callback(error)
    })
    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    fetchPage(url, (error, data)=>{
      if (error) return console.log(error)
      fs.writeFileSync(path.join(__dirname, folderName, 'your_CSV.csv'), data)
      console.log('the CSV file is downloaded in folder ', folderName)
      console.log('starting conversion to JSON')
      csv()
      .fromFile(csvFilePath)
      .then((jsonObj)=> {
        let jsonFile = JSON.stringify(jsonObj, null, 2)
        fs.writeFileSync(path.join(__dirname, folderName, 'your_json_converted.json'), jsonFile)
      }
      console.log('your converted JSON file is available in folder ', folderName)
  })
}

csvToConvert(process.argv[2])






console.log('getting the CSV file from ', url)
let json;
csv()
  .fromStream(request.get(csvToConvert))
  .then((jsonObj)=>{
    let json = JSON.stringify(jsonObj)
  });
  const folderName = uuidv1()
  fs.mkdirSync(folderName)
