import { useLocation } from 'react-router-dom';

const TestCarProm = () => {
    const { state } = useLocation();

    if (!state || !state.car) {
        return <div>Car details not found!</div>;
    }

    const { car } = state;

    return (
        <div>
            <h1>{car.name}</h1>
            <img src={car.image} alt={car.name} />
            <p>Price: {car.price}$</p>
            <p>Discounted Price: {parseFloat(car.price) - 150}$</p>
            <p>Offer expires on: {car.expireDate}</p>
        </div>
    );
};

export default TestCarProm;