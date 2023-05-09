function ImagePopup() {
  return (
    <section className="popup image-popup" id="image-popup">
      <div className="image-popup__container">
        <button className="image-popup__close-button zero-button" id="image-popup-close-button" type="button"></button>
        <img src="#" className="image-popup__picture" alt="#"/>
        <p className="image-popup__caption"></p>
      </div>
    </section>
  )
}

export default ImagePopup