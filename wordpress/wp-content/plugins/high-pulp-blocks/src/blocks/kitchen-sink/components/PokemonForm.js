import React from "react";

export default class AddPokemonForm extends React.Component {
	state = {
		name: '',
		pokemonType: '',
		imageUrl: '',
	};

	addPokemon = (e) => {
		e.preventDefault();

		const newPokemon = {
			title: this.state.name,
			content: 'A new Pokémon suggestion.',
			acf: {
				pokemon_type: this.state.pokemonType,
				image_url: this.state.imageUrl,
			},
			status: 'publish',
		}

		// Assuming addPokemon prop is a method passed down to handle the submission
		this.props.addPokemon?.(newPokemon);
	}

	render() {
		return (
			<form className="new-pokemon-form" onSubmit={this.addPokemon}>
				<div>
					<h2>Suggest a New Pokémon</h2>
					<p>We appreciate our community's suggestions and always aim to expand our Pokédex with YOU in mind!
						Share your ideas for new Pokémon below!</p>
				</div>

				<label>
					Pokémon Name:
					<input
						type="text"
						value={this.state.name}
						onChange={e => this.setState({ name: e.target.value })}
					/>
				</label>

				<label>
					Pokémon Type:
					<input
						type="text"
						value={this.state.pokemonType}
						onChange={e => this.setState({ pokemonType: e.target.value })}
					/>
				</label>

				<label>
					Image URL:
					<input
						type="text"
						value={this.state.imageUrl}
						onChange={e => this.setState({ imageUrl: e.target.value })}
					/>
				</label>

				<button type="submit">Submit Pokémon Suggestion</button>
			</form>
		);
	}
}
