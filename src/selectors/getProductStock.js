import { Productos } from '../data/Productos'

export const getProductStock = (changeStock) => {
    return Productos.find(stock => stock.stock === changeStock)
}
