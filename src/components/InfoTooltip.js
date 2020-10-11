import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip(props) {

    return (
        <PopupWithForm
            name="register"
            title={props.title}
        />
    )
}

export default InfoTooltip;