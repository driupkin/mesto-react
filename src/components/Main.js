import React from 'react';

function Main() {
    function handleEditAvatarClick() {
        const changeAvatar = document.querySelector('.popup_change-avatar');
        changeAvatar.classList.add('popup_opened');
    }
    function handleEditProfileClick() {
        const editProfile = document.querySelector('.popup_edit-profile');
        editProfile.classList.add('popup_opened');
     }
    function handleAddPlaceClick() { 
        const addCards = document.querySelector('.popup_add-cards');
        addCards.classList.add('popup_opened');
    }

    return (
        <main className="content">
            <section className="profile" id="">
                <div className="profile__avatar_container">
                    <img src="./images/profile-images/watch.gif" alt="Аватар пользователя" className="profile__avatar" />
                    <div className="profile__avatar_change" onClick={handleEditAvatarClick}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name"></h1>
                        <button type="button" className="profile__button-edit" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__subtitle"></p>
                </div>
                <button type="button" className="profile__button-add" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="elements">
                <img src="./images/image-load.gif" alt="Загрузка" className="elements__image-load" />
                <template id="card">
                    <div className="element">
                        <button className="element__trash" type="button"></button>
                        <img src="#" alt="#" className="element__image" />
                        <div className="element__title">
                            <h2 className="element__paragraph"></h2>
                            <div className="like">
                                <button className="like__heart" type="button"></button>
                                <p className="like__count">0</p>
                            </div>
                        </div>
                    </div>
                </template>
            </section>

        </main>
    );
}

export default Main;