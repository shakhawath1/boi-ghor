import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import Question from '../Question/Question';
import './Books.css';

const Books = () => {


    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    // data load for show ui
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    // manage handler for addToCart
    const addToCart = selectedbook => {
        let newCart = [];
        if (cart.length <= 3) {
            const exists = cart.find(product => product.id === selectedbook.id);
            if (!exists) {
                newCart = [...cart, selectedbook];
            }
            else {
                const rest = cart.filter(product => product.id !== selectedbook.id);
                newCart = [...rest, exists];
            }
            setCart(newCart);

        }
    }
    // remove data
    const removeAll = () => {
        const newCart = [];
        setCart(newCart)
    }

    return (
        <div>
            <h2>Wellcome to Boi Ghor</h2>
            <h4>Let's start your programming life...</h4>
            <div className='shop-container'>
                <div class="books-container">
                    {
                        books.map(book => <Book key={book.id} book={book} addToCart={addToCart}></Book>)
                    }
                </div>
                <div className='cart-books'>
                    <Cart cart={cart} removeAll={removeAll}></Cart>
                </div>
            </div>
            <Question></Question>
        </div>
    );
};

export default Books;