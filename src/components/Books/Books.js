import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);


    return (
        <div>
            <h2>Wellcome to Boi Ghor</h2>
            <h4>Let's start your programming life...</h4>
            <div className='shop-container'>
                <div class="books-container">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
                <div className='selected-books'></div>
            </div>
        </div>
    );
};

export default Books;