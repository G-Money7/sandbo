/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/kitchen-sink/components/BlockApp.js":
/*!********************************************************!*\
  !*** ./src/blocks/kitchen-sink/components/BlockApp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PokemonForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonForm */ "./src/blocks/kitchen-sink/components/PokemonForm.js");
/* harmony import */ var _PokemonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonList */ "./src/blocks/kitchen-sink/components/PokemonList.js");




class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    pokemon: [],
    loggedIn: null
  };
  addPokemon(newPokemon) {
    // Assume wp.api.models.Pokemon exists and is configured correctly
    const pokemon = new wp.api.models.Pokemon(newPokemon);
    pokemon.save().done(data => {
      console.log("saved!", data);
      this.getPokemon();
    }).fail(jqXHR => {
      console.error("failed!", jqXHR);
    });
  }
  getPokemon() {
    // Assume wp.api.collections.Pokemon exists and is configured correctly
    const pokemonCollection = new wp.api.collections.Pokemon();
    pokemonCollection.fetch().done(data => {
      console.log("pokemon!!", data, pokemonCollection);
      this.setState({
        pokemon: pokemonCollection.models
      });
    }).fail(jqXHR => {
      this.getPokemon();
    });
  }
  componentDidMount() {
    this.getPokemon();
  }
  render() {
    const {
      pokemon
    } = this.state;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Pok\xE9mon Suggestions"), pokemon.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PokemonList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pokemon: pokemon
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PokemonForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addPokemon: pokemonObj => this.addPokemon(pokemonObj)
    }));
  }
}

/***/ }),

/***/ "./src/blocks/kitchen-sink/components/PokemonCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/kitchen-sink/components/PokemonCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class PokemonCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  handleVote = voteType => {
    // Call the handleVote function passed from PokemonList
    this.props.handleVote(this.props.id, voteType);
  };
  render() {
    const {
      name,
      pokemonType,
      imageUrl,
      votes
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-name"
    }, name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-type"
    }, pokemonType), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl,
      alt: `Image of ${name}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vote"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.handleVote('up')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "img",
      "aria-label": "Vote Up"
    }, "\u2795")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, votes), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.handleVote('down')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "img",
      "aria-label": "Vote Down"
    }, "\u2796"))))));
  }
}

/***/ }),

/***/ "./src/blocks/kitchen-sink/components/PokemonForm.js":
/*!***********************************************************!*\
  !*** ./src/blocks/kitchen-sink/components/PokemonForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPokemonForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class AddPokemonForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    name: '',
    pokemonType: '',
    imageUrl: ''
  };
  addPokemon = e => {
    e.preventDefault();
    const newPokemon = {
      title: this.state.name,
      content: 'A new Pokémon suggestion.',
      acf: {
        pokemon_type: this.state.pokemonType,
        image_url: this.state.imageUrl
      },
      status: 'publish'
    };

    // Assuming addPokemon prop is a method passed down to handle the submission
    this.props.addPokemon?.(newPokemon);
  };
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-pokemon-form",
      onSubmit: this.addPokemon
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Suggest a New Pok\xE9mon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "We appreciate our community's suggestions and always aim to expand our Pok\xE9dex with YOU in mind! Share your ideas for new Pok\xE9mon below!")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Pok\xE9mon Name:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.name,
      onChange: e => this.setState({
        name: e.target.value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Pok\xE9mon Type:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.pokemonType,
      onChange: e => this.setState({
        pokemonType: e.target.value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Image URL:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.imageUrl,
      onChange: e => this.setState({
        imageUrl: e.target.value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Submit Pok\xE9mon Suggestion"));
  }
}

/***/ }),

/***/ "./src/blocks/kitchen-sink/components/PokemonList.js":
/*!***********************************************************!*\
  !*** ./src/blocks/kitchen-sink/components/PokemonList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PokemonCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonCard */ "./src/blocks/kitchen-sink/components/PokemonCard.js");



class PokemonList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      votes: {}
    };
  }
  handleVote = (id, voteType) => {
    // Update the vote count for the specific Pokémon suggestion
    this.setState(prevState => ({
      votes: {
        ...prevState.votes,
        [id]: voteType === 'up' ? (prevState.votes[id] || 0) + 1 : (prevState.votes[id] || 0) - 1
      }
    }), () => {
      console.log("Votes after update:", this.state.votes);
    });
  };
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pokemon-list"
    }, this.props.pokemon.map(pokemon => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PokemonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: pokemon.id // Assuming pokemon.id is the unique identifier
      ,
      name: pokemon.attributes.name,
      pokemonType: pokemon.attributes.acf.pokemon_type,
      imageUrl: pokemon.attributes.acf.image_url,
      votes: pokemon.attributes.acf.votes // Assume votes is stored and accessible
      ,
      handleVote: this.handleVote,
      id: pokemon.id // Pass the ID for voting functionality
    })));
  }
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/blocks/kitchen-sink/view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/kitchen-sink/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-gs-kitchen-sink');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map