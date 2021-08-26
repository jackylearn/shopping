import './BookScreen.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//redux actions
import { getBookDetails, followBook, followBookCancel } from '../redux/actions/bookActions.js'
import { addToCart, removeFromCart } from '../redux/actions/cartActions.js'

export default function BookScreen({ match, history }) {

    const followedBooks = useSelector(state => state.followedBooks)
    const booksInCart = useSelector(state => state.cart)

    const dispatch = useDispatch();
    const bookDetails = useSelector(state => state.getBookDetails)
    const { loading, error, book } = bookDetails;

    useEffect(() => {
        if (book && match.params.id !== book._id)
            dispatch(getBookDetails(match.params.id))

    }, [dispatch, book, match])

    const addToCartHandler = () => {
        document.querySelector(".add-cart-btn").classList.toggle('in-cart-btn')
        if (!booksInCart[book._id])
            dispatch(addToCart(book._id))
        else
            dispatch(removeFromCart(book._id))
    }

    const followBookHandler = () => {
        document.querySelector(".follow-btn").classList.toggle('followed-btn')
        if (!followedBooks[book._id])
            dispatch(followBook(book._id))
        else
            dispatch(followBookCancel(book._id))
    }

    return (
        <div className='book-screen'>
            {loading
                ? <h2>Loading...</h2>
                : error
                    ? <h2>{error}</h2>
                    : <>
                        <div className='book-screen-left'>
                            <div className='left-img'>
                                <img src={book.imageUrl} alt={book.title}></img>
                            </div>
                            <div className="left-info">
                                <p className='left-name'>{book.title}</p>
                                <p className='left-author'>{book.author}</p>
                                <p className='left-price'>Rent for 30 days: {book.price} {book.currency}</p>
                                <p className='left-description'>{book.description}</p>
                            </div>
                        </div>
                        <div className='book-screen-right'>
                            <div className='right-buttons'>
                                {booksInCart[book._id]
                                    ? <div className='btn add-cart-btn in-cart-btn' onClick={addToCartHandler} >In cart</div>
                                    : <div className='btn add-cart-btn' onClick={addToCartHandler} >Add to Cart</div>
                                }
                                {followedBooks[book._id]
                                    ? <div className='btn follow-btn followed-btn' onClick={followBookHandler} >Unfollow</div>
                                    : <div className='btn follow-btn' onClick={followBookHandler} >Follow</div>
                                }
                            </div>
                        </div>

                    </>
            }

        </div>
    )
}