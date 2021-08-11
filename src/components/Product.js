import React from 'react'

export const Product = ({ producto }) => {
    return (
        <div>
            <p><span>Nombre:</span> {producto.name}</p>
            <p><span>Descripción:</span> {producto.description}</p>
            <p><span>Precio:</span> ${producto.price}</p>
            <p><span>Stock:</span> {producto.stock ? 'Si' : 'No'}</p>
        </div>
    )
}
