(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(e,t,n){__NEXT_REGISTER_PAGE("/account",function(){return e.exports=n(214),{page:e.exports.default}})},214:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(5),s=n.n(o),i=n(14),c=n(0),u=n.n(c),l=n(3);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,v(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,c["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){this.setState({username:"",password:"",name:"",mail:"",error:""})}},{key:"login",value:function(){var e,t=(e=a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),e.next=3,l.a.postJson("/api/account/",this.state);case 3:null!=(t=e.sent).token?(document.cookie="x-tasklist-token="+t.token,document.location="/"):this.setState({error:t.error});case 5:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){p(o,r,a,s,i,"next",e)}function i(e){p(o,r,a,s,i,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return u.a.createElement(i.a,null,u.a.createElement("h2",{className:"jsx-3374414534"},"Login"),u.a.createElement("div",{className:"jsx-3374414534"},"Username"),u.a.createElement("input",{type:"text",id:"username",value:this.state.username,onChange:function(t){e.setState({username:t.target.value,error:""})},className:"jsx-3374414534"}),u.a.createElement("div",{className:"jsx-3374414534"},"Password"),u.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value,error:""})},className:"jsx-3374414534"}),u.a.createElement("div",{className:"jsx-3374414534"},"Name"),u.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value,error:""})},className:"jsx-3374414534"}),u.a.createElement("div",{className:"jsx-3374414534"},"Email"),u.a.createElement("input",{type:"text",id:"email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value,error:""})},className:"jsx-3374414534"}),this.state.error&&u.a.createElement("div",{className:"jsx-3374414534 error"},this.state.error,u.a.createElement("br",{className:"jsx-3374414534"})),u.a.createElement("div",{className:"jsx-3374414534"},u.a.createElement("button",{onClick:function(){return e.login()},className:"jsx-3374414534"},"Create account")),u.a.createElement(s.a,{styleId:"3374414534",css:[".error.jsx-3374414534{color:red;}"]}))}}])&&m(n.prototype,r),o&&m(n,o),t}();t.default=d}},[[213,1,0]]]);