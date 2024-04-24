import background from "../Assets/ims2-modified.jpg"
import logo from "../Assets/logo.jpg"
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:7070/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                
                const data = await response.json();
                setMessage('Signin successful');
                // Store tokens and user data as per best practices
                localStorage.setItem('authToken', data.authenticationToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('expiresAt', data.expiresAt);
                localStorage.setItem('username', data.username);
                history.push('/dashboard');
            } else {
                setMessage('Signin failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="h-screen w-full bg-slate-200 flex justify-center items-center" style={{ backgroundImage: `url(${background})` }}>
                <form className="flex bg-zinc-950 opacity-90 rounded-md flex-col justify-around items-center shadow-md h-3/4 py-6  px-5 w-1/3" onSubmit={handleSubmit}>
                    <div className=" text-xl text-white font-medium">
                            GET LOGGED IN!
                    </div>
                    <input type="text" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/6  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                    <input type="password" className="placeholder:non-italic placeholder:text-slate-400 block bg-white w-full border rounded-md border-gray-700 h-1/6  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 sm:text-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>  
                    <button className=" text-slate-900 text-md bg-slate-200 w-1/3 rounded-md h-12" type="submit">SIGN IN</button>
                </form>
                {message && <div>{message}</div>}
            </div>
        </>
    );
}

export default Signin;
