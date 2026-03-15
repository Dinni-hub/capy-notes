const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://images.weserv.nl/?url=raw.githubusercontent.com/Dinni-hub/kapibara.v1/main/Kapibara/Capybara%20Cute%201440x2560%20Resolution.jpg&w=512&h=512&fit=cover&output=png';
const dest = path.join(__dirname, 'public', 'icon-512.png');

https.get(url, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302) {
    https.get(res.headers.location, (res2) => {
      const fileStream = fs.createWriteStream(dest);
      res2.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Downloaded icon-512.png');
      });
    });
  } else {
    const fileStream = fs.createWriteStream(dest);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Downloaded icon-512.png');
    });
  }
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
