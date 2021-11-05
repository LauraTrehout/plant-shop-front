import { useState } from 'react';
import { Fade } from 'react-awesome-reveal'

import "./Checkout.css";

const Checkout = ({ cartItems }) => {
const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [address, setAddress] = useState('')


const createOrder = (e) => {
    e.preventDefault()
    alert(`Thank you for your order ${name}`)
    const order = {
        email,
        name,
        address,
        cartItems
    }
}

  return (
    <Fade>
      <form onSubmit={createOrder}>
        <div className="form-container">
          <div className='label-input'>
            <label>Email :</label>
            <input type="email" name='email'  onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='label-input'>
            <label>Name :</label>
            <input type="texte" name='name' onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='label-input'>
            <label>Address :</label>
            <input type="texte" name='address' onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <button className='add-to-cart' type='submit'>Order</button>
        </div>
      </form>
      </Fade>
  );
};

export default Checkout;
