import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css'

import { login, register } from '../redux/actions/authActions.js'


export default function Modal({ name, closeAll, status, handleFormSwitch, message, link }) {

    // private state for component only
    const [passwordVisibility, setPwdVisibility] = useState(false)
    const viewPassword = () => setPwdVisibility(prev => !prev)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const usernameHandler = event => setUserName(event.target.value)
    const passwordHandler = event => setPassword(event.target.value)

    // public state 
    const { login: loginStatus, error } = useSelector(state => state.auth)
    const { login: isLoginModalShown, register: isRegisterModalShown } = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const modalSubmitHandler = () => {
        if (name === "Login")
            dispatch(login(username, password))
        else
            dispatch(register(username, password))
        setUserName("")
        setPassword("")
    }

    useEffect(() => {
        if (!document) return
        if (loginStatus) return closeAll()
        if (isLoginModalShown)
            document.querySelector('#login .auth-message').innerText = error
        else if (isRegisterModalShown)
            document.querySelector('#register .auth-message').innerText = error
        return () => {
            document.querySelector('#login .auth-message').innerText = ""
            document.querySelector('#register .auth-message').innerText = ""
        }

    }, [loginStatus])

    return (
        <div id={name.toLowerCase()} className={status ? "modal active" : "modal"} >
            <h2 className="modal-title">{name}</h2>
            <p className="auth-message"></p>
            <div className="form">
                <div className="form-content">
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        name='name'
                        autoComplete="off"
                        placeholder='username'
                        onChange={usernameHandler}
                        value={username}
                        required />
                </div>
                <div className="form-content">
                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordVisibility ? 'text' : 'password'}
                        name='password'
                        placeholder='password'
                        onChange={passwordHandler}
                        value={password}
                        required />
                    <div className="visibility">
                        <FontAwesomeIcon icon={passwordVisibility ? ['fas', 'eye-slash'] : ['fas', 'eye']} onClick={viewPassword} />
                    </div>
                </div>
                <div className="btn modal-btn" onClick={modalSubmitHandler}>{name}</div>
            </div>
            <p>{message}  <a href='#' onClick={handleFormSwitch}>{link}</a></p>
        </div>

    )
}