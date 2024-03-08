import React from "react";

export default class ReviewCard extends React.Component {
	render(){
		let {title,review, rating} = this.props;
		return (
			<div className="review-card">
				<div className="review-title">{title}</div>
				<div className="review-title">{rating}</div>
				<div className="review-title">{review}</div>
			</div>
		)
	}

}
