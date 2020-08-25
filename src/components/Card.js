import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    function handleClick() {
        props.onCardClick(props);
    }
    function handleLikeClick() {
        props.onCardLike(props.card); 
    }
    //console.log(props.card.likes);
    return (
        <div className="element">
            <button className={`element__trash ${isOwn ? 'element__trash_active' : ''}`} type="button"></button>
            <img src={`${props.card.link}`} alt="#" className="element__image" onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__paragraph">{props.card.name}</h2>
                <div className="like">
                    <button
                        className={`like__heart ${isLiked ? 'like__heart_active' : ''}`}
                        type="button"
                        onClick={handleLikeClick}
                    >
                    </button>
                    <p className="like__count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;