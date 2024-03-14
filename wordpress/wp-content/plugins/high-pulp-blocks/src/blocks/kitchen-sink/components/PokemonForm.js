import React from "react";


export default class AddPokemonForm extends React.Component {
	state = {
		pokemon_name: '',
		pokemonType: [],
		image_url: '',
		content: '',
	};


	addPokemon = (e) => {
		e.preventDefault();

		const newPokemon = {
			content: this.state.content,

			acf: {
				pokemon_type: this.state.pokemonType,
				image_url: this.state.image_url,
				pokemon_name: this.state.pokemon_name,
			},
			status: 'publish',
		}


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
						value={this.state.pokemon_name}
						onChange={e => this.setState({ pokemon_name: e.target.value })}
					/>
				</label>

				<div class="skill">
				<label>Pokemon Type:</label>
				<select value={this.state.pokemonType} onChange={e=>this.setState({PokemonType:e.target.value})}>

					<option value="fire">fire</option>
					<option value="water">water</option>
					<option value="grass">grass</option>
				</select>
			</div>
				<label>
					Description of Pokemon
					<textarea
					value={this.state.content}
					onInput={e => this.setState({ content: e.target.value })}

					></textarea>
				</label>

				<label>
					Image URL:
					<input
						type="text"
						value={this.state.image_url}
						onChange={e => this.setState({ image_url: e.target.value })}
					/>
				</label>

				<button type="submit">Submit Pokémon Suggestion</button>
			</form>
		);
	}
}
