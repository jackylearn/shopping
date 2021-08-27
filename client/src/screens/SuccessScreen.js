import './SuccessScreen.css'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../redux/actions/cartActions.js'
import axios from 'axios'

export default function SuccessScreen({ history }) {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.data.id)
    const purchasedBooks = Object.keys(useSelector(state => state.cart))
    console.log(purchasedBooks)

    useEffect(() => {
        axios.put(`/api/user/${userId}/purchasedBooks`, { purchasedBooks })
        dispatch(resetCart())
    }, [history]);


    return (
        <div className='success-screen'>
            <h2>payment success</h2>
            <Link id='back-to-shop' to={'/'} > Back to shop </Link>
        </div>
    )
}