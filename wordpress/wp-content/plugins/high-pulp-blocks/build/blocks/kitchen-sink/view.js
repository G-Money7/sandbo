(()=>{"use strict";var e={352:(e,t,o)=>{var n=o(34);t.C=n.createRoot,n.hydrateRoot},34:e=>{e.exports=window.ReactDOM}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=window.React;var t=o.n(e),n=o(352);class a extends t().Component{state={pokemon_name:"",pokemonType:[],image_url:"",content:""};addPokemon=e=>{e.preventDefault();const t={content:this.state.content,acf:{pokemon_type:this.state.pokemonType,image_url:this.state.image_url,pokemon_name:this.state.pokemon_name},status:"publish"};this.props.addPokemon?.(t)};render(){return(0,e.createElement)("form",{className:"new-pokemon-form",onSubmit:this.addPokemon},(0,e.createElement)("div",null,(0,e.createElement)("h2",null,"Suggest a New Pokémon"),(0,e.createElement)("p",null,"We appreciate our community's suggestions and always aim to expand our Pokédex with YOU in mind! Share your ideas for new Pokémon below!")),(0,e.createElement)("label",null,"Pokémon Name:",(0,e.createElement)("input",{type:"text",value:this.state.pokemon_name,onChange:e=>this.setState({pokemon_name:e.target.value})})),(0,e.createElement)("div",{class:"skill"},(0,e.createElement)("label",null,"Pokemon Type:"),(0,e.createElement)("select",{value:this.state.pokemonType,onChange:e=>this.setState({PokemonType:e.target.value})},(0,e.createElement)("option",{value:"fire"},"fire"),(0,e.createElement)("option",{value:"water"},"water"),(0,e.createElement)("option",{value:"grass"},"grass"))),(0,e.createElement)("label",null,"Description of Pokemon",(0,e.createElement)("textarea",{value:this.state.content,onInput:e=>this.setState({content:e.target.value})})),(0,e.createElement)("label",null,"Image URL:",(0,e.createElement)("input",{type:"text",value:this.state.image_url,onChange:e=>this.setState({image_url:e.target.value})})),(0,e.createElement)("button",{type:"submit"},"Submit Pokémon Suggestion"))}}class s extends t().Component{handleVote=e=>{this.props.handleVote(this.props.id,e)};render(){const{pokemon_name:t,image_url:o,votes:n,pokemonType:a,content:s}=this.props;return(0,e.createElement)("div",{className:"pokemon-card"},(0,e.createElement)("div",{className:"pokemon-content"},(0,e.createElement)("div",{className:"pokemon-text"},(0,e.createElement)("div",{className:"pokemon-name"},t),(0,e.createElement)("div",{className:"pokemon-type"},s),(0,e.createElement)("div",{className:"pokemon-type"},a),(0,e.createElement)("div",{className:"pokemon-image"},(0,e.createElement)("img",{src:o,alt:`Image of ${t}`})),(0,e.createElement)("div",{className:"vote"},(0,e.createElement)("button",{onClick:()=>this.handleVote("up")},(0,e.createElement)("span",{role:"img","aria-label":"Vote Up"},"➕")),(0,e.createElement)("h3",null,n),(0,e.createElement)("button",{onClick:()=>this.handleVote("down")},(0,e.createElement)("span",{role:"img","aria-label":"Vote Down"},"➖"))))))}}class l extends t().Component{constructor(e){super(e),this.state={votes:{}}}handleVote=(e,t)=>{this.setState((o=>({votes:{...o.votes,[e]:"up"===t?(o.votes[e]||0)+1:(o.votes[e]||0)-1}})),(()=>{console.log("Votes after update:",this.state.votes)}))};render(){return(0,e.createElement)("div",{className:"pokemon-list"},this.props.pokemon.map((t=>(0,e.createElement)(s,{key:t.id,pokemon_name:t.attributes.acf.pokemon_name,content:t.attributes.content.rendered,pokemonType:t.attributes.acf.pokemon_type,image_url:t.attributes.acf.image_url,votes:t.attributes.acf.votes,handleVote:this.handleVote}))))}}class m extends t().Component{state={pokemon:[],loggedIn:null};addPokemon(e){new wp.api.models.Pokemon(e).save().done((e=>{console.log("saved!",e),this.getPokemon()})).fail((e=>{console.error("failed!",e)}))}getPokemon(){const e=new wp.api.collections.Pokemon;e.fetch().done((t=>{console.log("pokemon!!",t,e),this.setState({pokemon:e.models})})).fail((e=>{this.getPokemon()}))}componentDidMount(){this.getPokemon()}render(){const{pokemon:t}=this.state;return(0,e.createElement)("div",null,(0,e.createElement)("h3",null,"Latest Pokémon Suggestions"),t.length>0&&(0,e.createElement)(l,{pokemon:t}),(0,e.createElement)(a,{addPokemon:e=>this.addPokemon(e)}))}}document.querySelectorAll(".wp-block-gs-pokemon-suggestion").forEach((t=>{(0,n.C)(t).render((0,e.createElement)(m,null))}))})()})();