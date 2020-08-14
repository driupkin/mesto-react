import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name}`}>
            <div className="popup__container popup__container_delete-card">
                <form className="form form_delete-cards" name={`popup_${props.name}`} method="GET" action="#">
                    <button type="button" className="popup__close popup__close_delete-card"></button>
                    <h2 className="form__title form__title_delete-card">{props.title}</h2>
                    {props.children}
                    <button type="submit" className="form__button form__button_delete-card">{props.buttonName}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;