import { Router } from "express";
import { createProduct, getProducts, getProductById, updatePoduct, updateAvailability, deleteProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router()
//Routing
router.get('/',
  getProducts
)
router.get('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  getProductById
)
router.post('/',
  // Validacion
  body('name')
    .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no Válido')
    .notEmpty().withMessage('El nombre del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no valido'),
  handleInputErrors,
  createProduct
)
router.put('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  body('name')
    .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no Válido')
    .notEmpty().withMessage('El nombre del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no valido'),
  body('availability')
    .isBoolean().withMessage('Valor para la disponibilidad no válido'),
  handleInputErrors,
  updatePoduct
)
router.patch('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  updateAvailability
)
router.delete('/:id',
  param('id').isInt().withMessage('ID no Válido'),
  handleInputErrors,
  deleteProduct
)
export default router