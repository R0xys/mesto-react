import {api} from "../utils/api.js";
import React from "react";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription ] = React.useState("");
  const [userAvatar, setUerAvatar] = React.useState("#");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getApiData("users/me"), api.getApiData("cards")])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUerAvatar(userData.avatar);
      setCards(cardsData);
    })
    .catch((err) => console.log(err))
  }, [])
  
  return (
  <main className="main">
    <section className="profile">
      <div className="profile__flex-wrapper">
        <div className="profile__avatar-wrapper">
          <div onClick={props.onEditAvatar} className="profile__avatar-cover"></div>
          <img src={userAvatar} alt="Человек" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button zero-button" type="button"></button>
          </div>
          <p className="profile__caption">{userDescription}</p>
        </div>
      </div>
      <button onClick={props.onAddPlace} className="profile__add-button zero-button" type="button"></button>
    </section>
    <section className="grid-cards">
      {cards.map((item) => (
        <Card key={item._id} onCardClick={props.onCardClick} card={item} />
      ))}
    </section>
  </main>
  )
}

export default Main