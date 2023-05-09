function Main(props) {
  return (
  <main className="main">
    <section className="profile">
      <div className="profile__flex-wrapper">
        <div className="profile__avatar-wrapper">
          <div onClick={props.onEditAvatar} className="profile__avatar-cover"></div>
          <img src="#" alt="Человек" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title"></h1>
            <button onClick={props.onEditProfile} className="profile__edit-button zero-button" type="button"></button>
          </div>
          <p className="profile__caption"></p>
        </div>
      </div>
      <button onClick={props.onAddPlace} className="profile__add-button zero-button" type="button"></button>
    </section>
    <section className="grid-cards">
    </section>
  </main>
  )
}

export default Main