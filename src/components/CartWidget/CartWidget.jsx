import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import imgCarrito from "/img/Carrito.jpg"; // Importación correcta
import "./CartWidget.css";

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>
            <Link to="/cart">
                <img className="img" src={imgCarrito} alt="Carrito" />
                {cantidadTotal > 0 && <strong > {cantidadTotal} </strong>}
            </Link>
        </div>
    );
};

export default CartWidget;
