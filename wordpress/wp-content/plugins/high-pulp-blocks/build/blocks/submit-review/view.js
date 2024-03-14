(()=>{"use strict";var e={352:(e,t,r)=>{var a=r(34);t.C=a.createRoot,a.hydrateRoot},34:e=>{e.exports=window.ReactDOM}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=window.React;var t=r.n(e),a=r(352);class n extends t().Component{state={title:"",review:"",rating:0};addReview(e){e.preventDefault();const t={title:this.state.title,content:this.state.review,acf:{review_rating:parseInt(this.state.rating)||0},status:"publish"};this.props.addReview?.(t)}render(){return(0,e.createElement)("form",{className:"new-review-form",onSubmit:e=>this.addReview(e)},(0,e.createElement)("div",null,(0,e.createElement)("label",null,"Title:",(0,e.createElement)("input",{type:"text",value:this.state.title,onInput:e=>this.setState({title:e.target.value})}))),(0,e.createElement)("div",null,(0,e.createElement)("label",null,"Overall Rating:",(0,e.createElement)("input",{type:"number",value:this.state.rating,onInput:e=>this.setState({rating:e.target.value})}))),(0,e.createElement)("div",null,(0,e.createElement)("label",null,"Review:",(0,e.createElement)("textarea",{value:this.state.review,onInput:e=>this.setState({review:e.target.value})}))),(0,e.createElement)("button",{type:"submit"},"Add Review"))}}class l extends t().Component{state={reviews:[],loggedIn:null};addReview(e){new wp.api.models.Review(e).save().done((e=>{console.log("saved!",e)})).fail((e=>{console.error("failed!",e)}))}getReview(){const e=new wp.api.collection.Review;e.fetch().done((t=>{console.log("reviews!",t),this.setState({reviews:e.models})})).fail((e=>{console.error("failed!",e)}))}componentDidMount(){this.getReview()}render(){return(0,e.createElement)("div",null,(0,e.createElement)("h3",null,"Latest Reviews"),(0,e.createElement)(ReviewList,{reviews:this.state.reviews}),(0,e.createElement)("hr",null),(0,e.createElement)("h3",null,"Submit a Review"),(0,e.createElement)(n,{addReview:e=>this.addReview(e)}))}}document.querySelectorAll(".wp-block-tk-submit-review").forEach((t=>{(0,a.C)(t).render((0,e.createElement)(l,null))}))})()})();