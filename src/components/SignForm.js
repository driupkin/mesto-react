import React from 'react';

function SignForm(props) {
    return (
        <section className="sign">
            <div className="sign__container">
                <h2 className="sign__title">{props.title}</h2>
                <form className="sign-form">
                    <fieldset className="sign-form__field">
                        <input
                            // ref={}
                            name="email"
                            placeholder="Email"
                            className="sign-form__input"
                            type="text"
                            id="place-input"
                            required
                            minLength="1"
                            maxLength="30"
                        />
                        <input
                            // ref={}
                            name="password"
                            placeholder="Пароль"
                            className="sign-form__input"
                            type="text"
                            id="place-input"
                            required
                            minLength="8"
                            maxLength="30"
                        />
                    </fieldset>
                    <button
                        type="submit"
                        className="sign-form__button"
                        onClick={props.onClose}>
                        {props.buttonName}
                    </button>
                </form>
                <h3 className="sign__subtitle">{props.subtitle}
                    <a href="#">{props.subtitleUrl}</a>
                </h3>
            </div>
        </section>
    );
}

export default SignForm;