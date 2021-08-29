import './HomeScreen.css'
import Book from '../components/Book.js'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBooks as listBooks } from '../redux/actions/bookActions.js'
import { updatePurchasedBooks } from '../redux/actions/authActions.js'

export default function HomeScreen() {
    const loginStatus = useSelector(state => state.auth.login)
    const purchasedBooks = useSelector(state => state.auth?.data?.purchasedBooks)


    const dispatch = useDispatch();
    const getBooks = useSelector(state => state.getBooks)
    const { books, loading, error } = getBooks;

    useEffect(() => {
        // prevent fetch data from backend again
        if (books?.length > 0) return
        dispatch(listBooks())
    }, [dispatch])

    useEffect(() => {
        if (!loginStatus) return
        dispatch(updatePurchasedBooks())

    }, [loginStatus])

    return (
        <div className='home-screen'>
            <h2 className='screen-title'>Home</h2>
            <div id="all-books">
                {loading
                    ? <h2>Loading...</h2>
                    : error
                        ? <h2>{error}</h2>
                        : books.map(book => (
                            <Book key={book._id} item={book} purchased={purchasedBooks[book._id] || false} />
                        ))
                }
            </div>
        </div>
    )
}