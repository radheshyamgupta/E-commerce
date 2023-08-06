import React, { useState } from 'react';
import './LogIn.css';
import Header from '../../../Header';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
const [loding,setloding]=useState(false)
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setloding(true);
        
        let url;
        if (login) {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjdZ9of2N8GRjRQOKmr2jvthfaP7FvghA"
        } else {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjdZ9of2N8GRjRQOKmr2jvthfaP7FvghA"
        }
        
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: username,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    throw new Error(data.error.message);
                });
            }
        })
        .then((data) => {
          
            if (login) {
                alert("Logged in successfully");
                console.log(data)
            } else {
                alert("Signed up successfully");
                console.log(data)
            }
            setloding(false);
            setUsername("");
            setPassword("");
        })
        .catch((error) => {
            alert(error.message);
            setloding(false);
        });
    };
console.log('Username:', username);
console.log('Password:', password);

    return (
        <div className="logindiv">
            <h2>{login ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit} className="loginform">
                <div>
                    <input
                        type="text"
                        id="username"
                        placeholder="Email..."
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password..."
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
              { !loding && <button type="submit">{login ? 'Log In' : 'Sign Up'}</button> }
              {loding && <p>sending request...</p>}
            </form>
            <p onClick={() => setLogin(!login)}>
                {login ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </p>
        </div>
    );
}
