import React from 'react';

function Card(props) {
    return (
        <div className="element">
            <button className="element__trash" type="button"></button>
            <img src={`${props.link}`} alt="#" className="element__image" />
            <div className="element__title">
                <h2 className="element__paragraph">{props.name}</h2>
                <div className="like">
                    <button className="like__heart" type="button"></button>
                    <p className="like__count">{props.likes}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;