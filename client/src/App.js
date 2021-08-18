import './App.css';

function App() {
  return (
    <div className="app">
      <form id='register' action='/register' method='post'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' placeholder='name' required />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='password' required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
