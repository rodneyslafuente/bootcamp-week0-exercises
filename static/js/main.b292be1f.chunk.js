(this["webpackJsonppersonal-assistant"]=this["webpackJsonppersonal-assistant"]||[]).push([[0],{27:function(t,e,n){t.exports=n(38)},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=n(12),u=n(24),i=n(5),d=n(6),m=n(11);function s(){var t=Object(i.a)(["\n\tfont-size: 1.5em;\n  \ttext-align: center;\n\tfont-family: 'Roboto';\n"]);return s=function(){return t},t}function f(){var t=Object(i.a)(["\n\tlist-style-type: none;\n"]);return f=function(){return t},t}function b(){var t=Object(i.a)(["\n\tfont-size: 1.5em;\n  \ttext-align: center;\n\tfont-family: 'Roboto';\n"]);return b=function(){return t},t}function p(){var t=Object(i.a)(["\n\tfont-size: 2em;\n  \ttext-align: center;\n  \tcolor: palevioletred;\n\tmargin-right: 7em;\n\tfont-family: 'Roboto';\n"]);return p=function(){return t},t}function g(){var t=Object(i.a)(["\n\tpadding: 4em;\n\twidth: 40em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tdisplay: grid;\n\n"]);return g=function(){return t},t}function h(){var t=Object(i.a)(["\n \tpadding: 0.5em;\n \twidth: 20em;\n \tmargin: 1em 2em 1em 2em;\n\n \tbackground: lightblue;\n \tborder: none;\n \tborder-radius: 3px;\n\n"]);return h=function(){return t},t}function v(){var t=Object(i.a)(["\n\tbackground: darkblue;\n\tborder: none;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\tcolor: white;\n\tpadding: 5px;\n\twidth: 8em;\n\tmargin: 1em 2em 1em 2em;\n\t&:hover {\n\t\tbackground: lightblue;\n\t}\n"]);return v=function(){return t},t}function E(){var t=Object(i.a)(["\n\tpadding: 1em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tbackground: palevioletred;\n"]);return E=function(){return t},t}function j(){var t=Object(i.a)(["\n\ttext-align: center;\n\tcolor: white;\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: orange;\n\t}\n\tfont-weight: bold;\n\tfont-size: 1.5em;\n\tmargin: 0em 2.5em 0em 2.5em;\n"]);return j=function(){return t},t}var O=Object(d.a)(m.b)(j()),y=d.a.div(E()),x=d.a.button(v()),w=d.a.input(h()),T=d.a.section(g()),k=d.a.h1(p()),C=d.a.h1(b()),A=d.a.ul(f()),z=d.a.li(s()),R=n(7),S=function(t,e){return"addTodo"===e.type?[].concat(Object(u.a)(t),[e.newTodo]):"clearAll"===e.type?[]:void 0},P=function(t){var e=t.todos,n=t.search;if(0===e.length)return r.a.createElement(C,null,"Nothing to do!");var a=e.filter((function(t){return t.startsWith(n)})).map((function(t){return r.a.createElement(z,null,t)}));return r.a.createElement(A,null,a)},H=function(){var t=Object(a.useReducer)(S,[]),e=Object(l.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),u=Object(l.a)(c,2),i=u[0],d=u[1],m=Object(a.useState)(""),s=Object(l.a)(m,2),f=s[0],b=s[1];return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement("div",null,r.a.createElement(w,{value:f,onChange:function(t){return b(t.target.value)},placeholder:"My Todo",type:"text"}),r.a.createElement(x,{onClick:function(){return o({type:"addTodo",newTodo:f})}},"Add Todo")),r.a.createElement("div",null,r.a.createElement(w,{onChange:function(t){return d(t.target.value)},placeholder:"Search Todos",type:"text"}),r.a.createElement(x,{onClick:function(){return o({type:"clearAll"})}},"Clear All Todos")),r.a.createElement(k,null,"Your Todos:"),r.a.createElement(P,{todos:n,search:i})))},I=function(){return r.a.createElement(y,null,r.a.createElement(O,{to:"/"},"Home"),r.a.createElement(O,{to:"/todo"},"Todos"))},J=function(){var t=Object(a.useState)(),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t.coords.latitude+"&lon="+t.coords.longitude+"&appid=db5bbba816b58757082ce2230c7754a6&units=imperial").then((function(t){console.log(t),o(t)}))}))}),[]),n?r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(k,null,"Hello!"),r.a.createElement(C,null,"The API status text is: ",n.statusText,"."))):r.a.createElement(C,null,"Please turn on location permissions.")},B=function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/",component:J}),r.a.createElement(R.a,{exact:!0,path:"/todo",component:H})))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b292be1f.chunk.js.map