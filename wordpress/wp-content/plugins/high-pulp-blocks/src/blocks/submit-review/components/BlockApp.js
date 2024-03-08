import React from "react";
import AddReviewForm from "./AddReviewForm";

export default class BlockApp extends React.Component {
	state = {
		reviews: [],
		loggedIn: null,
	};


	addReview(newReview){
		const review = new wp.api.models.Review(newReview)
		review.save().done(data => {
			console.log('saved!', data);
		}).fail(jqXHR => {
			console.error('failed!', jqXHR)
		});
	}


	getReview(){
		const reviewCollection = new wp.api.collection.Review();
		reviewCollection.fetch().done(data => {
			console.log('reviews!', data);
			this.setState({reviews: reviewCollection.models})
		}).fail(jqXHR => {
			console.error('failed!', jqXHR)
		});
	}


	componentDidMount() {
		this.getReview();
	}

	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<ReviewList reviews={this.state.reviews} />
				<hr />
				<h3>Submit a Review</h3>
				<AddReviewForm addReview={reviewObj => this.addReview(reviewObj)} />
			</div>
		);
	}
}
