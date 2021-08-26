import './HomeScreen.css'
import Book from '../components/Book.js'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBooks as listBooks } from '../redux/actions/bookActions.js'

export default function HomeScreen(props) {

    const dispatch = useDispatch();
    const getBooks = useSelector(state => state.getBooks)
    const { books, loading, error } = getBooks;

    useEffect(() => {
        dispatch(listBooks())
    }, [dispatch])

    return (
        <div className='home-screen'>
            <h2 className='screen-title'>Home</h2>
            <div id="all-books">
                {loading
                    ? <h2>Loading...</h2>
                    : error
                        ? <h2>{error}</h2>
                        : books.map(book => (
                            <Book key={book._id} item={book} />
                        ))
                }
            </div>
        </div>
    )
}