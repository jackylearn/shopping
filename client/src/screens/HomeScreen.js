import './HomeScreen.css'
import Book from '../components/Book.js'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBooks as listBooks } from '../redux/actions/bookActions.js'

export default function HomeScreen({ history }) {
    const purchasedBooks = useSelector(state => state.auth?.data?.purchasedBooks) || {}

    const dispatch = useDispatch();
    const { books, loading, error } = useSelector(state => state.getBooks)

    useEffect(() => {
        // prevent fetch data from backend again
        if (books?.length > 0) return
        dispatch(listBooks())
    }, [])

    useEffect(() => {
        const h = window.location.hash
        if (h.length > 0) {
            history.push(h.split('#')[1])
        }
    }, [window.location.hash])

    return (
        <div className='home-screen'>
            <h2 className='screen-title'>Home</h2>
            <div id="all-books">
                {loading
                    ? <h2>Loading...</h2>
                    : error
                        ? <h2>{error}</h2>
                        : books.map(book => (
                            <Book key={book._id} item={book} purchased={purchasedBooks[book._id] > Date.now() || false} />
                        ))
                }
            </div>
        </div>
    )
}