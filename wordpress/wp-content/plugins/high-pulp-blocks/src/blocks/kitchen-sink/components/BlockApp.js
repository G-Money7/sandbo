import React from "react";
import AddPokemonForm from "./PokemonForm";
import PokemonList from "./PokemonList";

export default class BlockApp extends React.Component {
	state = {
		pokemon: [],
		loggedIn: null,
	};

	addPokemon(newPokemon) {
		// Assume wp.api.models.Pokemon exists and is configured correctly
		const pokemon = new wp.api.models.Pokemon(newPokemon);
		pokemon.save().done((data) => {
			console.log("saved!", data);
			this.getPokemon();
		}).fail((jqXHR) => {
			console.error("failed!", jqXHR);
		});
	}

	getPokemon() {
		// Assume wp.api.collections.Pokemon exists and is configured correctly
		const pokemonCollection = new wp.api.collections.Pokemon();
		pokemonCollection.fetch().done((data) => {
			console.log("pokemon!!", data, pokemonCollection);
			this.setState({ pokemon: pokemonCollection.models });
		}).fail((jqXHR) => {
			this.getPokemon();
		});
	}

	componentDidMount() {
		this.getPokemon();
	}

	render() {
		const { pokemon } = this.state;

		return (
			<div>
				<h3>Latest Pokémon Suggestions</h3>
				{pokemon.length > 0 && <PokemonList pokemon={pokemon} />}
				<AddPokemonForm addPokemon={(pokemonObj) => this.addPokemon(pokemonObj)} />
			</div>
		);
	}
}
