import React from "react";
import ReviewCard from "./ReviewCard";

export default class ReviewList extends React.Component {
	render(){
		return (
			<div className="review-list">
				{this.props.reviews.map(review => (
					<ReviewCard title={review.attributes.title.rendered}
					review={review.attributes.content.rendered}
					rating={review.attributes.acf.review_rating}
					/>
				))}
			</div>
		)
	}

}
