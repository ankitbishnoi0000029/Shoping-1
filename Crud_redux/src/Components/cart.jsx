import { useDispatch, useSelector } from "react-redux";
import { removetocart } from "../Actions/action";
import React, { useState, useEffect } from 'react';
import cart from '../assets/cart.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './cart.css';

function Cart() {
    // Fetch cart data from the Redux store
    const getCartData = useSelector((state) => state.count.cart);
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    // Set initial quantities when cart data is available
    useEffect(() => {
        const initialQuantities = getCartData.reduce((acc, item) => {
            acc[item.id] = 1; // Initialize quantity for each item
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [getCartData]);

    // Handle input change for item quantity
    const inputHandle = (e, id) => {
        const value = e.target.value;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };

    // Handle closing the Offcanvas
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Calculate total price for all items in the cart
    const calculateTotalPrice = () => {
        return getCartData.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + (item.price * quantity);
        }, 0);
    };

    return (
        <>
            {/* Cart Button */}
            <div>
                <nav className="position-relative p-1" onClick={handleShow}>
                    Cart <img src={cart} width={20} alt="Cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {getCartData.length ? getCartData.length : ""}
                    </span>
                </nav>
            </div>

            {/* Offcanvas Cart */}
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {getCartData.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        getCartData.map(item => {
                            const quantity = quantities[item.id] || 1;
                            const itemPrice = item.price * quantity;

                            return (
                                <div key={item.id} className="cart-item position-relative">
                                    <h5>{item.title}</h5>
                                    <p>Price: ${itemPrice.toFixed(2)}</p>
                                    <div className="secend-div">
                                        <span>Quantity: {quantity}</span>
                                        <input
                                            type="number"
                                            className="input_quntity"
                                            min="1"
                                            max="30"
                                            value={quantity}
                                            onChange={(e) => inputHandle(e, item.id)}
                                        />
                                        <div>
                                            <button
                                                onClick={() => dispatch(removetocart(item.id))}
                                                className="btn btn-danger d-block mt-2 btn-remove"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}

                    {/* Total Price */}
                    {getCartData.length > 0 && (
                        <div className="mt-3 fixed-bottom-price ">
                            <h5 className="text-primary">Total Price: ${calculateTotalPrice().toFixed(2)}</h5>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
