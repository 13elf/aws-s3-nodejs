const { S3 } = require('aws-sdk');
const path = require('path');
const fs = require('fs');

const s3 = new S3({
  region: process.env.AWS_S3_BUCKET_REGION
});

function listBuckets() {
  return s3.listBuckets().promise();
}

function uploadObject(path) {
  const filePath = path;
  const key = path.basename(filePath);
  const fileStream = fs.createReadStream(filePath);
  return s3.upload({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
    Body: fileStream
  }).promise();
}

function downloadObject(key) {
  return s3.getObject({
    Key: key,
    Bucket: process.env.AWS_S3_BUCKET_NAME
  }).createReadStream();
}

function deleteObject(key) {
  return s3.deleteObject({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key
  }).promise();
}

function listObjects() {
  return s3.listObjects({
    Bucket: process.env.AWS_S3_BUCKET_NAME
  }).promise();
}

module.exports = {
  listBuckets, uploadObject, downloadObject, deleteObject, listObjects
}