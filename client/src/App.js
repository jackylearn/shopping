import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { useEffect, useState } = require('react')

function App() {
  const [registerModalShown, setRegister] = useState(false)
  const [loginModalShown, setLogin] = useState(false)


  const handleFormSwitch = (event) => {
    setRegister(prev => !prev)
    setLogin(prev => !prev)
  }

  const loginButtonPressed = () => {
    setLogin(true)
    setRegister(false)
  }

  const registerButtonPressed = () => {
    setRegister(true)
    setLogin(false)
  }

  const closeModal = () => {
    setRegister(false)
    setLogin(false)
  }

  return (
    <div className="app">
      <Navbar loginButton={loginButtonPressed} registerButton={registerButtonPressed} />
      <Modal
        name="Register"
        route="/register"
        message="Already has an account?"
        link="login"
        handleFormSwitch={handleFormSwitch}
        status={registerModalShown}
      />
      <Modal
        name="Login"
        route="/login"
        message="Do not have an account?"
        link="register"
        handleFormSwitch={handleFormSwitch}
        status={loginModalShown}
      />
      <div
        id="overlay"
        className={loginModalShown || registerModalShown ? "active" : ""}
        onClick={closeModal}
      ></div>
    </div>
  );
}

function Modal(props) {
  const modalClass = props.status ? "modal active" : "modal";

  return (
    <div id={props.name.toLowerCase()} className={modalClass} >
      <h3 className="modal-title">{props.name}</h3>
      <form action={props.route} method='post'>
        <div className="form-content">
          <label htmlFor="name">Username</label>
          <input type="text" name='name' autoComplete="off" placeholder='username' required />
        </div>
        <div className="form-content">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='password' required />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn modal-btn">{props.name}</button>

        </div>
      </form>
      <p>{props.message}  <a href='#' onClick={props.handleFormSwitch}>{props.link}</a></p>
    </div>

  )
}

function Navbar(props) {
  return (
    <nav id="navbar">
      <div id="logo">BookRental</div>
      <div>

        <span onClick={props.loginButton}>Login</span>
        <span onClick={props.registerButton}>Register</span>
        <span><FontAwesomeIcon icon={["fas", "shopping-cart"]} /> Shopping Cart</span>
      </div>
    </nav>
  )
}



export default App;
