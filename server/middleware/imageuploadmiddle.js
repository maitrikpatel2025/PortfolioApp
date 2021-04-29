const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path')
const keys = require('../config/key');

aws.config.update({
  secretAccessKey: keys.awsSecretAccessKey, 
  accessKeyId: keys.awsAccessKeyID, 
  region: 'us-east-2' 
})

const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
  };


const upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({ // reference: https://www.npmjs.com/package/multer-s3
    s3: s3,
    bucket: keys.awsBucketName, 
    acl: 'public-read',// Access control for the file.
    contentType: multerS3.AUTO_CONTENT_TYPE, 
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING'}); // 'Testing'
    },
    key: function(req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension);
    }
  })
})


module.exports = upload