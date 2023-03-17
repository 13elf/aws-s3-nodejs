require('dotenv').config();
const express = require('express');
const { json, urlencoded } = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const s3 = require('./services/s3');

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

const uploader = multer({ dest: '/images' });

app.post('/upload', uploader.single('file'), async (req, res) => {
  const path = req.file.path;
  const data = await s3.uploadObject(path);
  fs.unlinkSync(path);
  res.json({ url: data.Location, fileName: data.Key });
});

app.get('/download/:objectName', (req, res) => {
  const key = req.params.objectName;
  const stream = s3.downloadObject(key);
  stream.pipe(res);
})