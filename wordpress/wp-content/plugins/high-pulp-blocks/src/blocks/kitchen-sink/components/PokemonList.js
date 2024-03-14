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
						key={pokemon.id} // Assuming pokemon.id is the unique identifier
						name={pokemon.attributes.name}
						pokemonType={pokemon.attributes.acf.pokemon_type}
						imageUrl={pokemon.attributes.acf.image_url}
						votes={pokemon.attributes.acf.votes} // Assume votes is stored and accessible
						handleVote={this.handleVote}
						id={pokemon.id} // Pass the ID for voting functionality
					/>
				))}
			</div>
		)
	}
}
