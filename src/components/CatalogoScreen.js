import React, { useState } from 'react';
import { getProductStock } from '../selectors/getProductStock';
import './CatalogoScreen.css';
import { Product } from './Product';

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
                            {producto.map(p => {
                                return (
                                    <Product
                                        producto={p}
                                    />
                                )
                            })}
                        </div>
                        :
                        <div className='all-product'>
                            <div >
                                {producto.map(p =>
                                (
                                    <Product
                                        producto={p}
                                    />
                                )
                                )}
                            </div>
                            <div>
                                {productoFalse.map(p =>
                                (
                                    <Product
                                        producto={p}
                                    />
                                )
                                )}
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
