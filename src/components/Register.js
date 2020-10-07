import React from 'react';
import SignForm from './SignForm';

function Register(props) {

    return (
        <SignForm
            title="Регистрация"
            subtitle="Уже зарегистрированны?"
            subtitleUrl="Войти"
            buttonName="Зарегистрироваться"
        />
    );
}

export default Register;