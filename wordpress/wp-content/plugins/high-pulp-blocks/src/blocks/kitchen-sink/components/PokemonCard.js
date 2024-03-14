import React from "react";

export default class PokemonCard extends React.Component {
	handleVote = (voteType) => {
		// Call the handleVote function passed from PokemonList
		this.props.handleVote(this.props.id, voteType);
	};

	render() {
		const { name, pokemonType, imageUrl, votes } = this.props;
		return (
			<div className="pokemon-card">
				<div className="pokemon-content">
					<div className="pokemon-text">
						<div className="pokemon-name">{name}</div>
						<div className="pokemon-type">{pokemonType}</div>
						<div className="pokemon-image">
							<img src={imageUrl} alt={`Image of ${name}`} />
						</div>
						<div className="vote">
							<button onClick={() => this.handleVote('up')}>
								<span role="img" aria-label="Vote Up">➕</span>
							</button>
							<h3>{votes}</h3>
							<button onClick={() => this.handleVote('down')}>
								<span role="img" aria-label="Vote Down">➖</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
