import React from 'react';
import '../blocks/root/root.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import { apiMe, apiCards } from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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

  React.useEffect(() => {
    function closeAllPopupsByOverlayOrEsc(e) {
     if ((e.target.classList.contains('popup_opened')) || (e.key === 'Escape')) 
        closeAllPopups();
      
    }
    document.addEventListener('keydown', closeAllPopupsByOverlayOrEsc);
    document.addEventListener('click', closeAllPopupsByOverlayOrEsc);
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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(values) {
    apiMe.editProfile(values)
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(url) {
    apiMe.changeAvatar(url.avatar)
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(values) {
    apiCards.addCard(values)
      .then(newCard => setCards([...cards, newCard]))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    (isLiked ? apiCards.deleteLike(card._id) : apiCards.putLike(card._id))
      .then(newCard => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    apiCards.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(item => item._id === card._id ? '' : item);
        setCards(newCards);
      }
      );
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="root">
          <div className="page">
            <Header />
            <Main
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
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