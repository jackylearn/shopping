import './Purchased.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBookContent } from '../redux/actions/bookActions.js'

export default function Purchased({ itemId }) {
    const dispatch = useDispatch()


    const bookInfo = useSelector(state => state.getBooks.books).filter(book => book._id === itemId)[0]
    const expires = useSelector(state => state.auth.data.purchasedBooks)[itemId] - Date.now()
    const content = useSelector(state => state.content)

    const readerHandler = () => {
        dispatch(getBookContent(itemId))
    }


    return (
        <div className='purchased-view'>
            <img src={bookInfo.imageUrl} alt={bookInfo.title} />
            <div className='purchased-book-info'>
                <span>{bookInfo.title}</span>
                <span>{bookInfo.author}</span>
                {
                    expires > 24 * 3600 * 1000
                        ? <p className='expires'>{`Expires in ${Math.floor(expires / 1000 / 3600 / 24)} days`}</p>
                        : <p className='expires-urgent'>{`Expires in ${Math.floor(expires / 1000 / 3600)} hours`}</p>
                }
            </div>
            <div className='btn read-btn' onClick={readerHandler}>Read</div>
        </div>
    )
}