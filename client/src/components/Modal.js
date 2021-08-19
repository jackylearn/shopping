import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css'


export default function Modal(props) {
    const modalClass = props.status ? "modal active" : "modal";
    const [passwordVisibility, setPwdVisibility] = useState(false)
    const viewPassword = () => {
        setPwdVisibility(prev => !prev)
    }

    return (
        <div id={props.name.toLowerCase()} className={modalClass} >
            <h2 className="modal-title">{props.name}</h2>
            <form action={props.route} method='post'>
                <div className="form-content">
                    <label htmlFor="name">Username</label>
                    <input type="text" name='name' autoComplete="off" placeholder='username' required />
                </div>
                <div className="form-content">
                    <label htmlFor="password">Password</label>
                    <input type={passwordVisibility ? 'password' : 'text'} name='password' placeholder='password' required />
                    <div className="visibility">

                        <FontAwesomeIcon icon={passwordVisibility ? ['fas', 'eye'] : ['fas', 'eye-slash']} onClick={viewPassword} />
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button type="submit" className="btn modal-btn">{props.name}</button>

                </div>
            </form>
            <p>{props.message}  <a href='#' onClick={props.handleFormSwitch}>{props.link}</a></p>
        </div>

    )
}