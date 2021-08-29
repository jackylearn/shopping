import { useState } from 'react'
import { useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();
    const modalSubmitHandler = () => {
        if (name === "Login")
            dispatch(login(username, password))
        else
            dispatch(register(username, password))

        closeAll()
        setUserName("")
        setPassword("")
    }

    return (
        <div id={name.toLowerCase()} className={status ? "modal active" : "modal"} >
            <h2 className="modal-title">{name}</h2>
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
                        type={passwordVisibility ? 'password' : 'text'}
                        name='password'
                        placeholder='password'
                        onChange={passwordHandler}
                        value={password}
                        required />
                    <div className="visibility">
                        <FontAwesomeIcon icon={passwordVisibility ? ['fas', 'eye'] : ['fas', 'eye-slash']} onClick={viewPassword} />
                    </div>
                </div>
                <div className="btn modal-btn" onClick={modalSubmitHandler}>{name}</div>
            </div>
            <p>{message}  <a href='#' onClick={handleFormSwitch}>{link}</a></p>
        </div>

    )
}