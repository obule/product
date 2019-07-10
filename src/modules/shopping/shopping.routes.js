import { Router } from 'express';
import validate from 'express-validation';
import * as path from 'path';
import ProductValidation from './shopping.validations';
import * as ProductControllers from './shopping.controller';

var multer = require('multer');

const UPLOADPATH = 'public';
const uploads = multer({
  storage: multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, `./${UPLOADPATH}`);
    },
    filename: function(req, file, callback) {
      callback(
        null,
        `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
      );
    },
  }),
}).single('file');

const routes = new Router();

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './ProductImage');
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
// var upload = multer({ storage: storage }).single('file');

// routes.post('/upload', function(req, res) {
//   upload(req, res, function(err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json(err);
//     } else if (err) {
//       return res.status(500).json(err);
//     }
//     return res.status(200).send(req.file);
//   });
// });

routes.post(
  '/',
  validate(ProductValidation.createProduct),
  ProductControllers.createProduct,
);

routes.patch('/upload/:id', uploads, ProductControllers.uploadImage);

routes.get('/', ProductControllers.listProduct);
export default routes;
