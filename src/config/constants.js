const devConfig = {
  MONGO_URL: 'mongodb://localhost/productdb',
  JWT_SECRET: 'promiseizuagbala',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/product-test',
};

const prodConfig = {
  MONGO_URL: process.env.MONGODB_URI,
};

const defaultConfig = {
  PORT: process.env.PORT || 4000,
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

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
