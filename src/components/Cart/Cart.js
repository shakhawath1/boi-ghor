import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import './Cart.css';

const Cart = ({ cart, removeAll }) => {
    console.log(cart)
    const [selectedOne, setSelectedOne] = useState([])

    const bookName = cart.map(book =>

        <div className='selected-books'>
            <img className='cart-img'
                src={book.img} alt=''></img>
            <p>{book.name}</p>
            <button><FontAwesomeIcon
                icon={faXmarkCircle} >
            </FontAwesomeIcon></button>
        </div>
    )

    const selectOne = (bookName) => {
        let selectedBooks = [...bookName];

        const randomBook = selectedBooks[Math.floor(Math.random() * selectedBooks.length)];
        setSelectedOne(randomBook)
    }

    return (
        <div>
            <h4 className='title'>Selected Books</h4>
            <div className='cart-list'>{bookName}
                <div className='cart-list'>
                    <h5>Selected One</h5>
                    {selectedOne}
                </div>
            </div>
            <div className='btn-div'>
                <button onClick={() => selectOne(bookName)} className='choose-btn'>CHOOSE 1 FOR ME</button>
                <button onClick={() => removeAll(cart)} className='remove-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;