import './Book.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
//redux actions
import { followBook, followBookCancel } from '../redux/actions/bookActions.js'

export default function Book(props) {
    const followedBooks = useSelector(state => state.followedBooks)

    const dispatch = useDispatch();

    const followBookHandler = () => {
        document.getElementById(`${props.item._id}-btn`).classList.toggle('followed')
        if (!followedBooks[props.item._id])
            dispatch(followBook(props.item._id))
        else
            dispatch(followBookCancel(props.item._id))
    }

    return (
        <div className='book'>
            <img src={props.item.imageUrl} alt={props.item.name} />

            <div className='book-info'>
                <p className='info-name'>
                    <span>{props.item.title}</span>
                    <span className='author'>{props.item.author}</span>
                    <FontAwesomeIcon
                        icon={['fas', 'heart']}
                        id={`${props.item._id}-btn`}
                        className={followedBooks[props.item._id] ? 'follow-icon followed' : 'follow-icon'}
                        onClick={followBookHandler} />
                </p>
                <p className='info-description'>{props.item.description.slice(0, 100) + "..."}</p>
                <p className='price'>Rent for 30 days: {props.item.price} {props.item.currency}</p>
            </div>

            <Link to={`/book/${props.item._id}`} className='info-button btn'>View Detail</Link>
        </div>
    )
}