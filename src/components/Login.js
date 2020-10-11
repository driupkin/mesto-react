import React from 'react';
import { useHistory } from 'react-router-dom';

import SignForm from './SignForm';
import * as auth from '../auth.js';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        props.tokenCheck();
        auth.authorize(email, password)
            .then(data => {
                if (data.token) {
                    history.push('/');
                }
            })
            .catch((err) => console.log(err));
        
        return;
    }

    return (
        <SignForm
            title="Вход"
            subtitle="Ещё не зарегистрированны? "
            subtitleUrl="Регистрация"
            buttonName="Войти"
            link="signup"
            onSubmit={handleSubmit}
            onEmailChange={e => setEmail(e.target.value)}
            onPassChange={e => setPassword(e.target.value)}
        />
    );
}

export default Login;