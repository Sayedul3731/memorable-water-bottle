
import './Bottle.css'
const Bottle = ({bottle, handlePurchase}) => {
    console.log(bottle);
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;