import React from 'react';
import '../blocks/root/root.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      <section className="popup popup_edit-profile">
        <div className="popup__container">
          <form className="form" name="popup" method="GET" action="#">
            <button type="button" className="popup__close"></button>
            <h2 className="form__title">Редактировать профиль</h2>

            <fieldset className="form__field">
              <input name="name" placeholder="Имя профиля" className="form__input form__input_name" type="text"
                id="name-input" required minlength="2" maxlength="40" />
              <span className='form__input-error' id='name-input-error'></span>
              <input name="description" placeholder="Описание" className="form__input form__input_description"
                id="description-input" type="text" required minlength="2" maxlength="200" />
              <span className='form__input-error' id='description-input-error'></span>
            </fieldset>

            <button type="submit" className="form__button form__button_edit-card">Сохранить</button>
          </form>
        </div>
      </section>
      <PopupWithForm title="Новое место" name="add-cards" buttonName="Создать" children={
        <fieldset className=" form__field">
          <input name="name" placeholder="Название" className="form__input form__input_place" type="text"
            id="place-input" required minlength="1" maxlength="30" />
          <span className='form__input-error' id='place-input-error'></span>
          <input name="link" placeholder="Ссылка на картинку" className="form__input form__input_url" type="url"
            id="url-input" required />
          <span className='form__input-error' id='url-input-error'></span>
        </fieldset>} />
    

      <section className="popup popup_cards">
        <div className="popup__container popup__container_card">
          <button type="button" className="popup__close popup__close_card"></button>
          <img src="#" alt="#" className="popup__image" />
          <p className="popup__subtitle"></p>
        </div>
      </section>

      <section className="popup popup_delete-cards">
        <div className="popup__container popup__container_delete-card">
          <form className="form form_delete-cards" name="popup_delete-cards" method="GET" action="#">
            <button type="button" className="popup__close popup__close_delete-card"></button>
            <h2 className="form__title form__title_delete-card">Вы уверены?</h2>
            <button type="submit" className="form__button form__button_delete-card">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_change-avatar">
        <div className="popup__container popup__container_change-avatar">
          <form className="form form_change-avatar" name="popup_change-avatar" method="GET" action="#">
            <button type="button" className="popup__close popup__close_change-avatar"></button>
            <h2 className="form__title form__title_change-avatar">Обновить аватар</h2>

            <fieldset className="form__field">
              <input name="avatar" placeholder="Ссылка на аватар" className="form__input form__input_url" type="url"
                id="url-input" required />
              <span className='form__input-error' id='url-input-error'></span>
            </fieldset>

            <button type="submit" className="form__button form__button_change-avatar">Сохранить</button>
          </form>
        </div>
      </section>
    </div >
  );
}

export default App;
