import App from "../App";
import FilaProducto from "./FilaProducto";
import FilaCategoria from "./FilaCategoria";

export default function TablaProductos({ productos }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto, index) => {
                    if (index === 0 || productos[index - 1].categoria !== producto.categoria) {
                        return (
                            <>
                                <FilaCategoria categoria={producto.categoria} />
                                <FilaProducto producto={producto} />
                            </>
                        );
                    } else {
                        return <FilaProducto producto={producto} />;
                    }
                })}
            </tbody>
        </table>
    );
}