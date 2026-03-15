const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/Dinni-hub/kapibara.v1/main/Kapibara/Capybara%20Cute%201440x2560%20Resolution.jpg';
const dest = path.join(__dirname, 'public', 'capybara.jpg');

https.get(url, (res) => {
  const fileStream = fs.createWriteStream(dest);
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Downloaded capybara.jpg');
  });
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
