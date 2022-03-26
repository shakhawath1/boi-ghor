import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import './Cart.css';

const Cart = ({ cart }) => {

    const [selectedOne, setSelectedOne] = useState([])
    // const [remove, setRemove] = useState([])

    let bookName = cart.map(book =>

        <div className='selected-books'>
            <img className='cart-img'
                src={book.img} alt=''></img>
            <p>{book.name}</p>
            <FontAwesomeIcon icon={faXmarkCircle} ></FontAwesomeIcon>
        </div>
    )

    let selectedBooks = [...bookName];
    if (selectedBooks.length > 4) {
        // let newList = selectedBooks;
    }

    const selectOne = (selectedBooks) => {

        const randomBook = selectedBooks[Math.floor(Math.random() * selectedBooks.length)];

        setSelectedOne(randomBook)

        // bookName = randomBook;
    }

    const removeAll = (bookName) => {
        bookName = [];
        // setRemove(bookName)
    }


    return (
        <div>
            <h4 className='title'>Selected Books</h4>
            <div className='cart-list'>{bookName}</div>
            <div className='cart-list'>
                <h5>Selected One</h5>
                {selectedOne}</div>
            <div className='btn-div'>
                <button onClick={() => selectOne(selectedBooks)} className='choose-btn'>CHOOSE 1 FOR ME</button>
                <button onClick={() => removeAll(bookName)} className='remove-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;