import { useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css'


const Bottles = ({bottles}) => {
    const [cart, setCart] = useState([])
    const handlePurchase = (bottle) => {
        console.log(bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)
    }
    return (
        <div>
             <h3>Total Purchase: {cart.length} </h3>
            <div className="bottle-container">
            {
                bottles.map( bottle => <Bottle key={bottle.id} handlePurchase={handlePurchase} bottle={bottle}></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottles;