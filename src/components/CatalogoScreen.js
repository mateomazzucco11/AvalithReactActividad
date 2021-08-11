import React, { useState } from 'react';
import { getProductStock } from '../selectors/getProductStock';
import './CatalogoScreen.css';

export const CatalogoScreen = () => {
    const [stock, setStock] = useState(true)

    const producto = getProductStock(true)
    const productoFalse = getProductStock(false)

    return (
        <div className='container-products'>
            <div className='box-products'>
                {
                    (stock)
                        ?
                        <div className='stock-product'>
                            <p><span>Nombre:</span> {producto.name}</p>
                            <p><span>Descripción:</span> {producto.description}</p>
                            <p><span>Precio:</span> ${producto.price}</p>
                            <p><span>Stock:</span> {producto.stock ? 'Si' : 'No'}</p>
                        </div>
                        :
                        <div className='all-product'>
                            <div >
                                <p><span>Nombre:</span> {producto.name}</p>
                                <p><span>Descripción:</span> {producto.description}</p>
                                <p><span>Precio:</span> ${producto.price}</p>
                                <p><span>Stock:</span> {producto.stock ? 'Si' : 'No'}</p>
                            </div>
                            <div>
                                <p><span>Nombre:</span> {productoFalse.name}</p>
                                <p><span>Descripción:</span> {productoFalse.description}</p>
                                <p><span>Precio:</span> ${productoFalse.price}</p>
                                <p><span>Stock:</span> {productoFalse.stock ? 'Si' : 'No'}</p>
                            </div>
                        </div>
                }
                <button
                    onClick={() => setStock(!stock)}
                    className='button-change'
                >
                    {stock ? 'Mostrar todos los productos' : 'Mostrar productos en stock'}
                </button>
            </div>
        </div>
    )
}
