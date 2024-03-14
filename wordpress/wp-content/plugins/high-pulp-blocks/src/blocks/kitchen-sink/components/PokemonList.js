import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			votes: {},
		};
	}

	handleVote = (id, voteType) => {
		// Update the vote count for the specific Pokémon suggestion
		this.setState(prevState => ({
			votes: {
				...prevState.votes,
				[id]: voteType === 'up' ? (prevState.votes[id] || 0) + 1 : (prevState.votes[id] || 0) - 1,
			},
		}), () => {
			console.log("Votes after update:", this.state.votes);
		});
	};

	render(){
		return (
			<div className="pokemon-list">
				{this.props.pokemon.map(pokemon => (
					<PokemonCard
						key={pokemon.id}
						pokemon_name={pokemon.attributes.acf.pokemon_name}
						content={pokemon.attributes.content.rendered}
						pokemonType={pokemon.attributes.acf.pokemon_type}
						image_url={pokemon.attributes.acf.image_url}
						votes={pokemon.attributes.acf.votes}
						handleVote={this.handleVote}
						// id={pokemon.id} // Pass the ID for voting functionality
					/>
				))}
			</div>
		)
	}
}
