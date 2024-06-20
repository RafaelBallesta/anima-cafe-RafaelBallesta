
export default function FilaProducto({ producto }) {
    const estiloTachado = {
        textDecoration: producto.stock === 0 ? 'line-through' : 'none'
    };

    return (
        <tr>
            <td style={estiloTachado}>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
        </tr>
    );
}