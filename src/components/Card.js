function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <article className="card">
      <button className="card__trash-button zero-button" type="button"></button>
      <img src={props.card.link} onClick={handleClick} className="card__image" alt={props.card.name}/>
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__wrapper">
          <button className="card__like-button zero-button" type="button"></button>
          <p className="card__like-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card