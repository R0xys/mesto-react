function PopupWithForm(props) {
  return (
  <>
    <section className={`popup ${props.isOpen ? "popup_opened" : ""}`} id={props.name}>
      <div className="popup__container">
        <button className="popup__close-button zero-button" id={`${props.name}-close-button`} type="button"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" method="post" name={props.name} className="popup__form" noValidate id={`${props.name}-form`}>
            {props.children}
            <button type="submit" className="popup__button popup__save-button zero-button" id={`${props.name}-submit-button`}>Создать</button>
          </form>
      </div>
    </section>
  </>
  )
}

export default PopupWithForm 