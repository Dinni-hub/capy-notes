const { Jimp } = require('jimp');
const path = require('path');

async function generate() {
  try {
    const imageUrl = 'https://raw.githubusercontent.com/Dinni-hub/kapibara.v1/main/Kapibara/Capybara%20Cute%201440x2560%20Resolution.jpg';
    console.log('Downloading image...');
    const image = await Jimp.read(imageUrl);
    
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    const size = Math.min(w, h);
    const x = (w - size) / 2;
    const y = (h - size) / 2;
    
    console.log(`Cropping to ${size}x${size} at (${x}, ${y})...`);
    image.crop({ x, y, w: size, h: size });
    
    const img512 = image.clone();
    img512.resize({ w: 512, h: 512 });
    await img512.write(path.join(__dirname, 'public', 'icon-512.png'));
    console.log('Created icon-512.png');
    
    const img192 = image.clone();
    img192.resize({ w: 192, h: 192 });
    await img192.write(path.join(__dirname, 'public', 'icon-192.png'));
    console.log('Created icon-192.png');
    
  } catch (err) {
    console.error('Error:', err);
  }
}

generate();
