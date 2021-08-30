import './PurchaseScreen.css'
import { useSelector } from 'react-redux'
import Purchased from '../components/Purchased'


export default function PurchaseScreen() {
    const { user, purchasedBooks = {} } = useSelector(state => state.auth.data)
    const purchasedBooksId = Object.keys(purchasedBooks)
    return (
        <div className='purchase-screen'>
            <h2>Hi {user}, here is your available books, enjoy!</h2>
            <div className='purchase-screen-container'>
                {purchasedBooksId.map(bookId => {
                    return (
                        <Purchased
                            key={bookId + '-view'}
                            itemId={bookId}
                        />
                    )
                })}
            </div>
        </div>
    )
}