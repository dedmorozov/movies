(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{11:function(e,t,r){},23:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),s=r(12),o=r.n(s),i=(r(23),r(16)),u=r(2),l=r.n(u),d=r(5),j=r(8),b=(r(25),r(26),function(e){var t=e._id,r=e.title,a=e.year,c=e.format,s=e.stars,o=e.removeMovie;return Object(n.jsxs)("div",{className:"movies__card card",children:[Object(n.jsxs)("div",{className:"card__title",children:[Object(n.jsx)("h3",{className:"card__name",children:r}),Object(n.jsx)("p",{className:"card__year",children:a}),Object(n.jsxs)("p",{className:"card__id",children:["#",t]})]}),Object(n.jsxs)("div",{className:"card__hidden",children:[Object(n.jsxs)("p",{className:"card__format",children:[Object(n.jsx)("strong",{children:"Format:"})," ",c]}),Object(n.jsx)("div",{className:"card__actors",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Actors:"})," ",s]})}),Object(n.jsx)("button",{className:"card__delete",type:"button",title:"delete film",onClick:function(){o(t)},children:Object(n.jsx)("img",{src:"https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-3.png",alt:"delete"})})]})]})});b.defaultProps={stars:""};r(27);var f=function(e){var t=e.movies,r=e.removeMovie;return Object(n.jsx)("div",{className:"movies",children:t.map((function(e){return Object(n.jsx)(b,{_id:e._id,title:e.title,year:parseInt(e.year,10),format:e.format,stars:e.stars,removeMovie:r},e._id)}))})};f.defaultProps={movies:[]};r(11);var h=r(13),m=r(14),p=r(17),v=r(15),O=r(4),x=r(3),_=r(6),y=r.n(_),g=c.a.memo((function(e){var t=e.name,r=e.value,a=e.handleChange,c=e.handleBlur,s=e.textError;return Object(n.jsxs)("label",{children:[Object(n.jsx)("h5",{children:t[0].toUpperCase()+t.slice(1)}),Object(n.jsx)("input",{name:t,placeholder:"Enter ".concat(t),className:s?"form__input form__input--error":"form__input",value:r,onChange:a,onBlur:c,autoComplete:"off"}),Object(n.jsx)("div",{className:"form__error",children:s})]})}));g.propTypes={name:y.a.string.isRequired,value:y.a.string,handleChange:y.a.func.isRequired,handleBlur:y.a.func.isRequired,textError:y.a.string},g.defaultProps={value:"",textError:null};var w={title:"",year:"",format:"",stars:""},C=Object.keys(w).filter((function(e){return"title"===e||"year"===e||"format"===e||"stars"===e})).reduce((function(e,t){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},t,null))}),{}),N=function(e){Object(p.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={values:w,errors:C},e.handleChange=function(t){var r=t.target,n=r.name,a=r.value;e.setState((function(e){return{values:Object(x.a)(Object(x.a)({},e.values),{},Object(O.a)({},n,a))}}))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.addMovie)(e.state.values),e.setState({values:w})},e.handleBlur=function(t){var r=t.target,n=r.name,a=r.value,c=e.state.errors;Object.prototype.hasOwnProperty.call(c,n)&&(e.setState((function(e){return{errors:Object(x.a)(Object(x.a)({},e.errors),{},Object(O.a)({},n,a?null:"field ".concat(n," is required")))}})),a&&n.includes("year")&&e.setState((function(e){return{errors:Object(x.a)(Object(x.a)({},e.errors),{},Object(O.a)({},n,/[a-zA-Z]/g.test(a)?"Please enter a year":null))}})))},e.isDisabledButton=function(){var t=e.state.values,r=t.title,n=t.year,a=t.format,c=t.stars,s=Object.values(e.state.errors).some((function(e){return e}));return!r||!n||!a||!c||s},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this.state,t=e.values,r=e.errors,a=this.handleChange,c=this.handleSubmit,s=this.handleBlur;return Object(n.jsxs)("form",{className:"modal__form form",onSubmit:c,id:"form",children:[Object(n.jsx)("h3",{children:"Add movie"}),Object.keys(t).map((function(e){return Object(n.jsx)(g,{name:e,value:t[e],handleChange:a,handleBlur:s,textError:r[e]},e)})),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",className:"form__button",disabled:this.isDisabledButton(),children:"Add"})})]})}}]),r}(c.a.PureComponent),k=function(e){var t=e.active,r=e.setActive,a=e.addMovie;return Object(n.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return r(!t)},"aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal__content",onClick:function(e){return e.stopPropagation()},"aria-hidden":"true",children:Object(n.jsx)(N,{addMovie:a})})})},S=window.location.href,E=S.includes("heroku")?S:"http://localhost:4000/",A=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(j.a)(s,2),u=o[0],b=o[1],h=Object(a.useState)([]),m=Object(j.a)(h,2),p=m[0],v=m[1],O=Object(a.useState)(!0),x=Object(j.a)(O,2),_=x[0],y=x[1];Object(a.useEffect)(Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)}))));var g=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"movies"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"movies/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:r=e.sent,v([].concat(Object(i.a)(p),[r]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(E,"movies/").concat(t),e.next=3,fetch(r,{method:"DELETE"});case 3:v(p.filter((function(e){return e._id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=p.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())||e.stars.split(",").find((function(e){return e.toLowerCase().includes(r.toLowerCase())}))})),A=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(!_),p.sort((function(e,t){return e.title.localeCompare(t.title)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return b(!u)},className:"header__button",children:"Add movie"}),Object(n.jsx)("button",{type:"button",onClick:A,className:"header__button",disabled:!_,children:_?"Sort movies":"Sorted"}),r&&Object(n.jsx)("button",{onClick:function(){return c("")},type:"button",className:"header__button header__clear",children:"Clear"}),Object(n.jsx)("label",{children:Object(n.jsx)("input",{type:"text",className:"header__input",placeholder:"Search by movie or actors",value:r,onChange:function(e){c(e.target.value)}})})]}),Object(n.jsx)(f,{movies:S,removeMovie:N}),Object(n.jsx)(k,{active:u,setActive:b,addMovie:C})]})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.40ea7edc.chunk.js.map