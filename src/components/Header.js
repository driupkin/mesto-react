import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <div className="logo"></div>
      <h2 className="header__title">{props.title.email}
        <a className="header__link" href={`/${props.title.link}`}>{props.title.name}</a>
      </h2>
    </header>
  );
}

export default Header;