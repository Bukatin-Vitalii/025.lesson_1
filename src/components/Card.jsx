import React from 'react';
import './styles.scss'

const Card = ({ title, message, image }) => {
	return (
		<div className="card">
			<div className="card__content">
				<h2 className="card__title">{title}</h2>
				<p className="card__message">{message}</p>
			</div>
			<img className="card__image" src={image} alt="card" />
		</div>
	);
}

export default Card;
