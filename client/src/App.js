import './App.css';

function App() {


  const handleFormSwitch = (event) => {
    console.log('hi')
  }


  return (
    <div className="app">
      <Modal
        name="Register"
        route="/register"
        message="Already has an account?"
        link="login"
        handleFormSwitch={handleFormSwitch}

      />
      <Modal
        name="Login"
        route="/login"
        message="Do not have an account?"
        link="register"
        handleFormSwitch={handleFormSwitch}
        status="hidden"
      />
      <div
        id="overlay"
        className="hidden"
      ></div>
    </div>
  );
}

function Modal(props) {
  return (
    <div id={props.name.toLowerCase()} className={`modal ${props.status}`} >
      <h3 className="modal-title">{props.name}</h3>
      <form action={props.route} method='post'>
        <div className="form-content">
          <label htmlFor="name">Username</label>
          <input type="text" name='name' autocomplete="off" placeholder='username' required />
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

export default App;
