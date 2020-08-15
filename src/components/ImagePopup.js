import React from 'react';

function ImagePopup() {
    return (
        <section className="popup popup_cards">
            <div className="popup__container popup__container_card">
                <button type="button" className="popup__close popup__close_card"></button>
                <img src="#" alt="#" className="popup__image" />
                <p className="popup__subtitle"></p>
            </div>
        </section>
    );
}

export default ImagePopup;