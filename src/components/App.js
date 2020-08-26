import React from 'react';
import '../blocks/root/root.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { apiMe, apiCards } from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: ''
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiMe.getData()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    apiCards.getData()
      .then(data => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(e) {
    // if (e.target) {
    //   setIsEditAvatarPopupOpen(false);
    //   setIsEditProfilePopupOpen(false);
    //   setIsAddPlacePopupOpen(false);
    // }
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(values) { console.log(values);
     apiMe.editProfile(values)
    .then(data => {
      console.log(data);
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
   }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="root">
          <div className="page">
            <Header />
            <Main
              onCardClick={handleCardClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              setCards={setCards}
            />
            <Footer />
          </div>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            title="Редактировать профиль"
            name="edit-profile"
            buttonName="Сохранить"
            children={
              <fieldset className="form__field">
                <input name="name" placeholder="Имя профиля" className="form__input form__input_name" type="text"
                  id="name-input" required minLength="2" maxLength="40" />
                <span className='form__input-error' id='name-input-error'></span>
                <input name="description" placeholder="Описание" className="form__input form__input_description"
                  id="description-input" type="text" required minLength="2" maxLength="200" />
                <span className='form__input-error' id='description-input-error'></span>
              </fieldset>
            }
          /> */}
          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title="Новое место"
            name="add-cards"
            buttonName="Создать"
            children={
              <fieldset className=" form__field">
                <input name="name" placeholder="Название" className="form__input form__input_place" type="text"
                  id="place-input" required minLength="1" maxLength="30" />
                <span className='form__input-error' id='place-input-error'></span>
                <input name="link" placeholder="Ссылка на картинку" className="form__input form__input_url" type="url"
                  id="url-input" required />
                <span className='form__input-error' id='url-input-error'></span>
              </fieldset>}
          />
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            title="Обновить аватар"
            name="change-avatar"
            buttonName="Сохранить"
            children={
              <fieldset className="form__field">
                <input name="avatar" placeholder="Ссылка на аватар" className="form__input form__input_url" type="url"
                  id="url-input" required />
                <span className='form__input-error' id='url-input-error'></span>
              </fieldset>
            }
          />
          {/* <PopupWithForm title="Вы уверены?" name="delete-cards" buttonName="Да" /> */}
          <ImagePopup
            card={selectedCard}
            link={selectedCard.link}
            name={selectedCard.name}
            onClose={closeAllPopups}
          />
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;