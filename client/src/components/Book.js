import './Book.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Book(props) {
    const [followed, setFollow] = useState(false)

    const followBook = (event) => {
        const item = event.target;
        setFollow(prev => !prev)
    }

    return (
        <div className='book'>
            <img src="https://picsum.photos/300/200" alt="book img" />

            <div className='book-info'>
                <p className='info-name'>
                    <span>Book1</span>
                    <span className='author'>Author</span>
                    <FontAwesomeIcon icon={['fas', 'heart']} className={followed ? 'follow-icon' + " followed" : 'follow-icon'} onClick={followBook} />
                </p>
                <p className='info-description'>Cras congue mi sed eros consectetur tincidunt. Cras mollis dolor ut mi condimentum, sit amet rutrum odio fringilla. Nam sollicitudin venenatis dui, ut porta justo mollis sit amet. Nunc eu velit risus. Proin eu lorem volutpat, facilisis dolor ac, porta tortor. Nam at nunc pharetra, finibus massa vitae, rhoncus erat. Nunc fermentum efficitur arcu nec feugiat. Quisque vel augue a mauris euismod sagittis nec at nunc. Nulla non elit sed ipsum porta sollicitudin. Etiam aliquam leo ac risus convallis, quis dictum augue feugiat. </p>
                <p className='price'>Rent for 30 days: {`$1`}</p>
            </div>

            <Link to={`/book/${1}`} className='info-button btn'>View Detail</Link>
        </div>
    )
}