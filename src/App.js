import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword } from './features/emailAndPassword/credentials';
import { useState } from 'react';

function App() {

  const [localEmail, setLocalEmail] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  const email = useSelector((state) => state.credentials.email)
  const password = useSelector((state) => state.credentials.password)
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setLocalEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setLocalPassword(e.target.value);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(localEmail));
    dispatch(setPassword(localPassword));
  }

  return (
    <div className="App">
      <form>
        <div>
          <input type='email' onChange={handleEmail} />
        </div>
        <div>
          <input type='password' onChange={handlePassword} />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <h1>Email: {email}</h1>
      <h1>Password: {password}</h1>
    </div>
  );
}

export default App;
