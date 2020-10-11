import React from 'react';
import SignForm from './SignForm';
import * as auth from '../auth.js';
import { Route, Redirect } from "react-router-dom";

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        auth.register(email, password)
            .then(res => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <SignForm
            title="Регистрация"
            subtitle="Уже зарегистрированны? "
            subtitleUrl="Войти"
            buttonName="Зарегистрироваться"
            link="signin"
            onSubmit={handleSubmit}
            onEmailChange={e => setEmail(e.target.value)}
            onPassChange={e => setPassword(e.target.value)}
        />
    );
}

export default Register;