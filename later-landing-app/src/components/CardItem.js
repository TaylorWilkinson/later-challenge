import React from 'react';

function CardItem(props) {
  return(
    <>
      <li className='cards__item'>
        <img className='card__star__rank' alt='5 star rating' src='images/stars-069fa221.svg'/>
        <p className='customer__quote'>{props.quote}</p>
        <div className='cards__item__info'>
          <img className='cards__item__img' src={props.src} alt={props.alt}/>
          <div className='cards__item__text__container'>
            <h5 className='cards__item__text'>{props.name}</h5>
            <p className='cards__item__text'>{props.title}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem;
