import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

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
    />
    <Footer />
    <PopupWithForm isOpen="isAddPlacePopupOpen" title="Новое место" name="card-popup" children={(  
    <>
      <input type="text" minLength="2" maxLength="30" className="popup__input" placeholder="Название" required id="card-popup-input-title" name="input-title" />
      <span className="popup__error card-popup-input-title-error"></span>
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="card-popup-input-src" name="input-src" />
      <span className="popup__error card-popup-input-src-error"></span>
    </> 
    )}/>
    <PopupWithForm isOpen="isEditProfilePopupOpen" title="Редактировать профиль" name="profile-popup" children={(  
    <>
      <input type="text" minLength="2" maxLength="40" required className="popup__input" id="profile-popup-input-name" name="input-name" />
      <span className="popup__error profile-popup-input-name-error"></span>
      <input type="text" minLength="2" maxLength="200" required className="popup__input" id="profile-popup-input-job" name="input-job" />
      <span className="popup__error profile-popup-input-job-error"></span>
    </> 
    )}/>
    <PopupWithForm title="Вы уверены?" name="confirm-popup" children={(<></>)}/>
    <PopupWithForm isOpen="isEditAvatarPopupOpen" title="Обновить аватар" name="avatar-popup" children={(  
    <>
      <input type="url" className="popup__input" placeholder="Ссылка на картинку" required id="avatar-popup-input-src" name="input-src" />
      <span className="popup__error avatar-popup-input-src-error"></span>
    </> 
    )}/>
    <ImagePopup />
    <template id="card">
      <article className="card">
        <button className="card__trash-button zero-button" type="button"></button>
        <img src="#" className="card__image" alt="#"/>
        <div className="card__caption">
          <h2 className="card__title"></h2>
          <div className="card__wrapper">
            <button className="card__like-button zero-button" type="button"></button>
            <p className="card__like-quantity"></p>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
