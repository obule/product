import HttpStatus from 'http-status';
import Product from './shopping.model';

export async function createProduct(req, res) {
  try {
    const create = await Product.createProduct(req.body);

    return res.status(HttpStatus.OK).json(create);
  } catch (error) {
    console.log(error);
    return res.status(HttpStatus.BAD_REQUEST).json(error);
  }
}
export async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'File must be provided' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'No product found with this id' });
    }
    product.imageName = req.file.filename;

    return res.status(HttpStatus.OK).json(await product.save());
  } catch (error) {
    console.log(error);
    return res.status(HttpStatus.BAD_REQUEST).json(error);
  }
}

export async function listProduct(req, res) {
  try {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    const listProduct = await Product.listProducts({ skip, limit });
    if (!listProduct) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'No product found' });
    }
    return res.status(HttpStatus.OK).json(listProduct);
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error);
  }
}
