import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';

function App() {
  function closeAllPopups() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    setSelectedCard("");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    console.log(selectedCard);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("")

  return (
  <div className="page__content">
    <Header />
    <Main onEditProfile = {() => {
      setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }}
    onAddPlace = {() => {
      setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }} 
    onEditAvatar = {() => {
      setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }}
    onCardClick = {handleCardClick}
    />
    <Footer />
    <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="card-popup" children={(  
    <>
      <input type="text" minLength="2" maxLength="30" className="popup__input" placeholder="Название" required id="card-popup-input-title" name="input-title" />
      <span className="popup__error card-popup-input-title-error"></span>
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="card-popup-input-src" name="input-src" />
      <span className="popup__error card-popup-input-src-error"></span>
    </> 
    )}/>
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="profile-popup" children={(  
    <>
      <input type="text" minLength="2" maxLength="40" required className="popup__input" id="profile-popup-input-name" name="input-name" />
      <span className="popup__error profile-popup-input-name-error"></span>
      <input type="text" minLength="2" maxLength="200" required className="popup__input" id="profile-popup-input-job" name="input-job" />
      <span className="popup__error profile-popup-input-job-error"></span>
    </> 
    )}/>
    <PopupWithForm onClose={closeAllPopups} title="Вы уверены?" name="confirm-popup" children={(<></>)}/>
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="avatar-popup" children={(  
    <>
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="avatar-popup-input-src" name="input-src" />
      <span className="popup__error avatar-popup-input-src-error"></span>
    </> 
    )}/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}

export default App;
