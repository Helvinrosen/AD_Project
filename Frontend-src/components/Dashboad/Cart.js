import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import './cart.css';
import PrimarySearchAppBar from './Header';
import axios from 'axios';  // Import axios

const Cart = () => {
  const { cartItems ,removeFromCart} = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const handleRent = () => {
    // Prepare data to be sent to the backend
    const orderData = {
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: totalPrice,
    };

    // Send POST request to Spring Boot backend
    axios.post('http://localhost:8000/product', orderData)
      .then(response => {
        console.log('Order successfully sent to the backend', response.data);
        alert('Payment successful! Order placed.');
      })
      .catch(error => {
        console.error('There was an error sending the order!', error);
        // alert('Failed to place order. Please try again.');
      });

    if (window.Razorpay) {
      const options = {
        key: 'rzp_test_AWrlyaXOO9ncih', // Your Razorpay key
        amount: totalPrice * 100, // Amount in paise
        currency: 'INR',
        name: 'Rent My Studio',
        description: 'Rent Payment',
        handler: function (response) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'HRSTUDIO',
          email: 'HR@studio.com',
          contact: '917695918390',
        },
        notes: {
          address: 'HRSTUDIO',
        },
        theme: {
          color: '#080808',
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
    }
  };

  return (
    <div>
      <PrimarySearchAppBar/>
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity} - Price: ₹{item.price} - Total: ₹{item.quantity * item.price}
                  <button onClick={() => removeFromCart(item.name)} className="remove-button">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total-amount">
              <h3>Total Amount: ₹{totalPrice}</h3>
            </div>
            <div>
              <button onClick={handleRent} className="rent-button">
                Rent
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
