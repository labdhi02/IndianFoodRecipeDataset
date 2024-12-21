const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

// Define the route to fetch data
app.get('/api/recipes', (req, res) => {
  const results = [];
  // Read CSV file
  fs.createReadStream('IndianDoodDataset.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Send the data as a JSON response
      res.json(results);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
