import './Purchased.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Purchased({ itemId }) {

    const { id: userId } = useSelector(state => state.auth.data)
    const bookInfo = useSelector(state => state.getBooks.books).filter(book => book._id === itemId)[0]
    const expires = useSelector(state => state.auth.data.purchasedBooks)[itemId] - Date.now()

    const readerHandler = async () => {
        const { data } = await axios.get(`/api/books/viewer/${itemId}?userId=${userId}`)
        const { success, error } = data
        success ? alert(success) : alert(error)
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