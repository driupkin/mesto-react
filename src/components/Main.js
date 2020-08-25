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
        if (isLiked) {
            apiCards.deleteLike(card._id)
                    .then(data => { console.log(data);
                        card = data;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        } else {
            apiCards.putLike(card._id)
                    .then(data => { console.log(data);
                        card = data;
                        
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        }
        // Отправляем запрос в API и получаем обновлённые данные карточки
        // apiCards.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        //     // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        //   const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        //   // Обновляем стейт
        //   setCards(newCards);
        
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
                        key={i}
                    />
                ))}
            </section>

        </main>
    );
}

export default Main;