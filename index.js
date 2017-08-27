const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);

const imageminWebp = require('imagemin-webp');
const imagemin = require('imagemin');

imagemin(['images/*.{jpg,png}'], 'webp', {
  use: [
    imageminWebp({
      loseless: true
    })
  ]
}).then(_ => {
  console.log('Done');
  
})