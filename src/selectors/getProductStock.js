import { ProductosList } from '../data/ProductosList'

export const getProductStock = (changeStock) => {
    return ProductosList.filter(stock => stock.stock === changeStock)
}
