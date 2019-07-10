module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const devConfig = {
  MONGO_URL: 'mongodb://localhost/productdb',
  JWT_SECRET: 'promiseizuagbala'
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/product-test'
};

const prodConfig = {
  MONGO_URL: process.env.MONGODB_URI
};

const defaultConfig = {
  PORT: process.env.PORT || 4000
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;

    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the warning with Promises
/* eslint-disable no-console */
_mongoose2.default.Promise = global.Promise;

// Connect the db with the Url provided


try {
  _mongoose2.default.connect(_constants2.default.MONGO_URL);
} catch (error) {
  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);
}

_mongoose2.default.connection.once('open', () => console.log('Mongodb Running')).on('error', e => {
  throw e;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = __webpack_require__(18);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(13);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(15);

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use((0, _helmet2.default)());
  }
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded());

  if (isDev) {
    app.use((0, _morgan2.default)('dev'));
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shopping = __webpack_require__(10);

var _shopping2 = _interopRequireDefault(_shopping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/api/v1/product', _shopping2.default);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(3);

var _middleware = __webpack_require__(4);

var _middleware2 = _interopRequireDefault(_middleware);

var _modules = __webpack_require__(5);

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = __webpack_require__(6); /* eslint-disable no-console */

const app = (0, _express2.default)();
(0, _middleware2.default)(app);

app.use(_express2.default.static('public'));
app.get('/', (req, res) => {
  console.log(__dirname);
  res.send('Hello World');
});

app.disable('etag');

app.use(cors());

(0, _modules2.default)(app);
app.use((err, req, res, next) => {
  return res.status(err.status).json(err);
});
app.listen(_constants2.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Server running on port: ${_constants2.default.PORT}
        -------
        Running on ${process.env.NODE_ENV}
        ------
        Make something great
        `);
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = createProduct;
exports.uploadImage = uploadImage;
exports.listProduct = listProduct;

var _httpStatus = __webpack_require__(16);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _shopping = __webpack_require__(9);

var _shopping2 = _interopRequireDefault(_shopping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createProduct(req, res) {
  try {
    const create = await _shopping2.default.createProduct(req.body);

    return res.status(_httpStatus2.default.OK).json(create);
  } catch (error) {
    console.log(error);
    return res.status(_httpStatus2.default.BAD_REQUEST).json(error);
  }
}
async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(_httpStatus2.default.BAD_REQUEST).json({ message: 'File must be provided' });
    }
    const product = await _shopping2.default.findById(req.params.id);
    if (!product) {
      return res.status(_httpStatus2.default.NOT_FOUND).json({ message: 'No product found with this id' });
    }
    product.imageName = req.file.filename;

    return res.status(_httpStatus2.default.OK).json((await product.save()));
  } catch (error) {
    console.log(error);
    return res.status(_httpStatus2.default.BAD_REQUEST).json(error);
  }
}

async function listProduct(req, res) {
  try {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    const listProduct = await _shopping2.default.listProducts({ skip, limit });
    if (!listProduct) {
      return res.status(_httpStatus2.default.NOT_FOUND).json({ message: 'No product found' });
    }
    return res.status(_httpStatus2.default.OK).json(listProduct);
  } catch (error) {
    return res.status(_httpStatus2.default.BAD_REQUEST).json(error);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProductSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [100, 'Name should not exceed 100 characters']
  },
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [1000, 'Description should not exceed 1000 characters']
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'category should not exceed 100 characters']
  },
  imageName: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

ProductSchema.statics = {
  createProduct(args) {
    return this.create(Object.assign({}, args));
  },
  listProducts({ skip = 0, limit = 5 } = {}) {
    return this.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit);
  }
};

exports.default = _mongoose2.default.model('Product', ProductSchema);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(1);

var _expressValidation = __webpack_require__(14);

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _path = __webpack_require__(20);

var path = _interopRequireWildcard(_path);

var _shopping = __webpack_require__(11);

var _shopping2 = _interopRequireDefault(_shopping);

var _shopping3 = __webpack_require__(8);

var ProductControllers = _interopRequireWildcard(_shopping3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multer = __webpack_require__(19);

const UPLOADPATH = 'public';
const uploads = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `./${UPLOADPATH}`);
    },
    filename: function (req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
  })
}).single('file');

const routes = new _express.Router();

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

routes.post('/', (0, _expressValidation2.default)(_shopping2.default.createProduct), ProductControllers.createProduct);

routes.patch('/upload/:id', uploads, ProductControllers.uploadImage);

routes.get('/', ProductControllers.listProduct);
exports.default = routes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(17);

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createProduct: {
    body: {
      name: _joi2.default.string().trim().max(100).required(),
      description: _joi2.default.string().trim().max(500).required(),
      price: _joi2.default.string().trim().required(),
      category: _joi2.default.string().trim().max(100).required(),
      color: _joi2.default.string().trim().required()
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express-validation");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);