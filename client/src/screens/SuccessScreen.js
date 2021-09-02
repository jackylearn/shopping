import './SuccessScreen.css'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../redux/actions/cartActions.js'
import axios from 'axios'
import { updatePurchasedBooks } from '../redux/actions/authActions.js'



export default function SuccessScreen({ history }) {
    const [timeLeft, setTimer] = useState(5)
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.data?.id)
    const purchasedBooks = Object.keys(useSelector(state => state.cart))

    useEffect(() => {
        if (userId)
            axios.put(`/api/user/${userId}/purchasedBooks`, { purchasedBooks })
                .then(() => dispatch(updatePurchasedBooks()))
        dispatch(resetCart())
    }, []);

    useEffect(() => {
        // history.push rather than window.location.replace to prevent new http request
        setTimeout(() => history.push('/'), 5000)
    })

    useEffect(() => {
        const timer = setTimeout(() => setTimer(prev => prev - 1), 1000)
        return () => {
            clearTimeout(timer)
        }
    })


    return (
        <div className='success-screen'>
            <h2>Payment Success</h2>
            <p>{`${timeLeft} secs redirects to shop`}</p>
            <Link id='back-to-shop' to={'/'} > Back to shop </Link>
        </div>
    )
}