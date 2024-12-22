const fs = require('fs');
const csv = require('csv-parser');

module.exports = (req, res) => {
  const results = [];
  
  // Read CSV file
  fs.createReadStream('Cleaned_Indian_Food_Dataset.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Send the data as a JSON response
      res.status(200).json(results);
    });
};
