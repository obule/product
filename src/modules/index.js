import productRoutes from './shopping/shopping.routes';

export default app => {
  app.use('/api/v1/product', productRoutes);
};
