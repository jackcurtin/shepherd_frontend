import React, { Component, Fragment, useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function LoginForm({ setToken }) {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            emailAddress,
            password
        });
        setToken(token.jwt);
        history.push("/");
        window.location.reload();
    }

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    email:
                    <input type="text" onChange={event => setEmailAddress(event.target.value)}/>
                </label>
                <label>
                    password:
                    <input type="password" onChange={event => setPassword(event.target.value)}/>
                </label>
            </form>
        </div>
    );
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
};