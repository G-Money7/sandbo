import React from "react";

export default class PokemonCard extends React.Component {
	handleVote = (voteType) => {
		// Call the handleVote function passed from PokemonList
		this.props.handleVote(this.props.id, voteType);
	};

	render() {
		const { pokemon_name, image_url, votes, pokemonType, content } = this.props;
		return (
			<div className="pokemon-card">
				<div className="pokemon-content">
					<div className="pokemon-text">
						<div className="pokemon-name">{pokemon_name}</div>
						{/*<div className="pokemon-type">{pokemon_type}</div>*/}
						<div className="pokemon-type">{content}</div>
						{/*<div className="pokemon-type">dangerouslySetInnerHTML={{ __html: content}}</div>*/}
						<div className="pokemon-type">{pokemonType}</div>
						<div className="pokemon-image">
							<img src={image_url} alt={`Image of ${pokemon_name}`} />
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
