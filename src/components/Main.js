import React from 'react';
import { apiMe, apiCards } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        (isLiked ? apiCards.deleteLike(card._id) : apiCards.putLike(card._id))
            .then(newCard => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                props.setCards(newCards);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        apiCards.deleteCard(card._id)
            .then(()=> {
                const newCards = cards.filter(item=> item._id === card._id ? '' : item);
                props.setCards(newCards);
            }
            );
    }

    return (
        <main className="content">
            <section className="profile" id="">
                <div className="profile__avatar_container" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
                    <div className="profile__avatar_change" onClick={props.onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {/* <img src="./images/image-load.gif" alt="Загрузка" className="elements__image-load" /> */}
                {cards.map((card, i) => (
                    <Card
                        card={card}
                        onCardLike={handleCardLike}
                        onCardClick={props.onCardClick}
                        onCardDelete={handleCardDelete}
                        key={i}
                    />
                ))}
            </section>

        </main>
    );
}

export default Main;