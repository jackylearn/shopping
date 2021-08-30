import './App.css';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Navbar from './components/Navbar.js'
import Modal from './components/Modal.js'
import CartPreview from './components/CartPreview.js'
import SideDrawer from './components/SideDrawer.js'

import CartScreen from './screens/CartScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import BooksScreen from './screens/BookScreen.js'
import SuccessScreen from './screens/SuccessScreen.js';
import PurchaseScreen from './screens/PurchaseScreen.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js'

import { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } from './redux/actions/modalActions.js'

function App() {
  const dispatch = useDispatch();
  const { login: isLoginModalShown, register: isRegisterModalShown } = useSelector(state => state.modal)
  const loginStatus = useSelector(state => state.auth.login)
  const [isCartPreviewShown, setCartPreview] = useState(false)
  const [isSideDrawerShown, setSideDrawer] = useState(false)

  const handleFormSwitch = () => {
    if (isLoginModalShown)
      dispatch(openRegisterModal())
    else
      dispatch(openLoginModal())
  }

  const loginButtonPressed = () => {
    dispatch(openLoginModal())
    setSideDrawer(false)
  }

  const registerButtonPressed = () => {
    dispatch(openRegisterModal())
    setSideDrawer(false)
  }

  const closeAll = () => {
    if (isLoginModalShown) dispatch(closeLoginModal())
    if (isRegisterModalShown) dispatch(closeRegisterModal())
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
            <PrivateRoute exact path="/success" loginStatus={loginStatus} component={SuccessScreen} />
            <PrivateRoute exact path="/user" loginStatus={loginStatus} component={PurchaseScreen} />
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
