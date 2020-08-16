import React from 'react';
import { apiMe, apiCards } from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        apiMe.getData()
            .then(data => {
                setUserAvatar(data.avatar);
                setUserName(data.name);
                setUserDescription(data.about);
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

    return (
        <main className="content">
            <section className="profile" id="">
                <div className="profile__avatar_container" style={{ backgroundImage: `url(${userAvatar})` }}>
                    <div className="profile__avatar_change" onClick={props.onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {/* <img src="./images/image-load.gif" alt="Загрузка" className="elements__image-load" /> */}
                {cards.map((card, i) => (
                    <Card link={card.link} name={card.name} likes={card.likes.length} onCardClick={props.onCardClick} key={i} />
                    ))}
            </section>

        </main>
    );
}

export default Main;