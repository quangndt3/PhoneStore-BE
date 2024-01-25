import express from "express"
import {ListProduct, add, getAll, getAll_no_per_page, getOne, getProductByName, getRelatedProduct, restoreQuantity, subtractionQuantity, update, xoa } from "../controllers/product"
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router()

router.get("/products/:id", getOne);
router.post("/products", checkPermission, add);
router.patch("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission,xoa);
router.get("/products",getAll)
router.get("/filterProduct",getProductByName)
router.get("/product",getAll_no_per_page)
router.get("/listProduct",ListProduct)
router.get("/relatedProduct/:id",getRelatedProduct)
router.patch("/subtractionQuantity",subtractionQuantity)
router.patch("/resotreQuantity",restoreQuantity)
export default router