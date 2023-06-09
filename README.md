# Description

This repository demonstrates how to use AWS SDK to interact with S3 (Simple Storage Service). This project must be deployed on an EC2 instance with a proper role and a policy assigned in order to allow access to the S3 service. Tehrefore, it does not use access keys and that makes it more secure in case of a system compromise. If the application cannot be deployed on an EC2 instance, then an access key should be generated for a user acount to allow access to the S3 bucket and that access key should be used while initializing s3 object in `services/s3.js`.

# Environment Variables

The following environment variables must be set for the prohect to run successfully

- `AWS_S3_BUCKET_NAME`
- `AWS_S3_BUCKET_REGION`

# Installation and Running

```bash
npm install
npm start
```
