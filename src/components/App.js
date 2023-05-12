import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';

function App() {

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''})

  return (
  <div className="page__content">
    <Header />
    <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onCardClick = {handleCardClick} />
    <Footer />
    <PopupWithForm buttonText="Создать" onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="card-popup" >
      <input type="text" minLength="2" maxLength="30" className="popup__input" placeholder="Название" required id="card-popup-input-title" name="input-title" />
      <span className="popup__error card-popup-input-title-error"></span>
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="card-popup-input-src" name="input-src" />
      <span className="popup__error card-popup-input-src-error"></span>
    </PopupWithForm>
    <PopupWithForm buttonText="Сохрнаить" onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="profile-popup">
      <input type="text" minLength="2" maxLength="40" required className="popup__input" id="profile-popup-input-name" name="input-name" />
      <span className="popup__error profile-popup-input-name-error"></span>
      <input type="text" minLength="2" maxLength="200" required className="popup__input" id="profile-popup-input-job" name="input-job" />
      <span className="popup__error profile-popup-input-job-error"></span>
    </PopupWithForm> 
    <PopupWithForm buttonText="Сохрнаить" onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Вы уверены?" name="confirm-popup">
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="avatar-popup-input-src" name="input-src" />
      <span className="popup__error avatar-popup-input-src-error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}

export default App;
