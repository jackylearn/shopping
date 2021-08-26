import './App.css';
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar.js'
import Modal from './components/Modal.js'
import CartPreview from './components/CartPreview.js'
import SideDrawer from './components/SideDrawer.js'

import CartScreen from './screens/CartScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import BooksScreen from './screens/BookScreen.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [isRegisterModalShown, setRegisterModal] = useState(false)
  const [isLoginModalShown, setLoginModal] = useState(false)
  const [isCartPreviewShown, setCartPreview] = useState(false)
  const [isSideDrawerShown, setSideDrawer] = useState(false)

  const handleFormSwitch = () => {
    setRegisterModal(prev => !prev)
    setLoginModal(prev => !prev)
  }

  const loginButtonPressed = () => {
    setLoginModal(true)
    setRegisterModal(false)
    setSideDrawer(false)
  }

  const registerButtonPressed = () => {
    setRegisterModal(true)
    setLoginModal(false)
    setSideDrawer(false)
  }

  const closeAll = () => {
    setRegisterModal(false)
    setLoginModal(false)
    setCartPreview(false)
    setSideDrawer(false)
  }

  const showCartPreview = () => setCartPreview(true)

  const showSideDrawer = () => setSideDrawer(true)

  return (
    <Router >

      <div className="app">
        {/* for website */}
        <Navbar
          loginButton={loginButtonPressed}
          registerButton={registerButtonPressed}
          showCartPreview={showCartPreview}
          showSideDrawer={showSideDrawer}
        />
        <SideDrawer
          status={isSideDrawerShown}
          loginButton={loginButtonPressed}
          registerButton={registerButtonPressed}
          showCartPreview={showCartPreview}
          closeAll={closeAll}
        />
        <Modal
          name="Register"
          message="Already has an account?"
          link="login"
          handleFormSwitch={handleFormSwitch}
          status={isRegisterModalShown}
          closeAll={closeAll}
        />
        <Modal
          name="Login"
          message="Do not have an account?"
          link="register"
          handleFormSwitch={handleFormSwitch}
          status={isLoginModalShown}
          closeAll={closeAll}
        />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/book/:id" component={BooksScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>

        </main>
        <CartPreview
          status={isCartPreviewShown}
          closeAll={closeAll}
        />
        <div
          id="overlay"
          className={
            isLoginModalShown
              || isRegisterModalShown
              || isCartPreviewShown
              || isSideDrawerShown
              ? "active" : ""}
          onClick={closeAll}
        ></div>
      </div>
    </Router>
  );
}


export default App;
