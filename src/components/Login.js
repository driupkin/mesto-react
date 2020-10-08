import React from 'react';
import SignForm from './SignForm';
import * as auth from '../auth.js';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        auth.authorize(email, password);
    }
    return (
        <SignForm
            title="Вход"
            subtitle="Ещё не зарегистрированны? "
            subtitleUrl="Регистрация"
            buttonName="Войти"
            onSubmit={handleSubmit}
            onEmailChange={e => setEmail(e.target.value)}
            onPassChange={e => setPassword(e.target.value)}
        />
    );
}

export default Login;