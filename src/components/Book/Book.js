import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Book.css'

const Book = ({ book }) => {
    console.log(book)
    const { img, name, price } = book;
    return (


        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top p-2 rounded-3" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: {price}</p>
                </div>
                <button class="text-muted border-0 fs-5 fw-bold add-btn"><p>ADD TO CART</p>
                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                </button>
            </div>
        </div>




    );
};

export default Book;