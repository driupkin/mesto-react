import React from 'react';
import { useHistory } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../auth.js';

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        auth.register(email, password)
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    auth.authorize(email, password)
                        .then(data => {
                            if (data.token) {
                                history.push('/');
                            }
                        })
                        .catch((err) => console.log(err));
                    console.log(data.data);
                    props.setStatus(true);
                } else {
                    console.log(data);
                    props.setStatus(false);
                }
                props.submitRegister(true);
            })
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