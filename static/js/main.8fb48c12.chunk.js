(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(56),s=n.n(l),i=(n(64),n(14)),m=n(15),u=n(17),c=n(16),o=n(18),d=(n(65),function(e){var t=e.id,n=e.type,a=e.press,l=e.handleBtnPress,s=a?"game-field-list__btn game-field-list__btn_press":"game-field-list__btn ",i=function(){if(!l)return!1;l({id:t,type:n,btnPress:!a})};return r.a.createElement("div",{className:"game-field-list__item"},r.a.createElement("button",{onClick:i,onTouchStart:i,onTouchEnd:i,type:"button",className:s},t))}),g=(n(32),function(e){var t=e.bigFieldArr,n=e.handleBtnPress,a=e.btnPressBigArr;return r.a.createElement("div",{className:"game-field"},r.a.createElement("h3",{className:"game-field__title"},r.a.createElement("b",null,"\u041f\u043e\u043b\u0435 1")," \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 8 \u0447\u0438\u0441\u0435\u043b"),r.a.createElement("ul",{className:"game-field-list"},t.map(function(e){var t=!!a.length&&a.some(function(t){return t===e});return r.a.createElement(d,{id:e,key:e,type:"fieldBig",press:t,handleBtnPress:n})})))}),f=function(e){var t=e.smallFieldArr,n=e.handleBtnPress,a=e.btnPressSmallArr;return r.a.createElement("div",{className:"game-field"},r.a.createElement("h3",{className:"game-field__title"},r.a.createElement("b",null,"\u041f\u043e\u043b\u0435 2")," \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 1 \u0447\u0438\u0441\u043b\u043e"),r.a.createElement("ul",{className:"game-field-list"},t.map(function(e){var t=!!a.length&&a.some(function(t){return t===e});return r.a.createElement(d,{id:e,key:e,type:"fieldSmall",press:t,handleBtnPress:n})})))},b=(n(33),function(e){var t=e.bigFieldArr,n=e.smallFieldArr,a=e.handleBtnPress,l=e.btnPressBigArr,s=e.btnPressSmallArr,i=e.handleResult,m=e.btnPressLengthFlag,u=e.handleGeneratedNumbers;return r.a.createElement("div",{className:"game-field-container"},r.a.createElement("i",{onClick:u,onTouchStart:u,onTouchEnd:u,className:"game-field-container__icon"}),r.a.createElement("h2",{className:"game-field-container__title"},"\u0411\u0438\u043b\u0435\u0442 1"),r.a.createElement("div",{className:"game-field-container__fields"},r.a.createElement(g,{bigFieldArr:t,handleBtnPress:a,btnPressBigArr:l}),r.a.createElement(f,{smallFieldArr:n,handleBtnPress:a,btnPressSmallArr:s})),r.a.createElement("button",{disabled:m,onClick:i,onTouchStart:i,onTouchEnd:i,className:"game-field-container__result result-btn"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"))}),h=function(e){var t=e.randomBigArr,n=e.randomSmallArr,a=e.win,l=e.btnPressBigArr,s=e.btnPressSmallArr,i=e.bigResultCount,m=e.smallResultCount,u=e.resultFlag,c=a?"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0435\u043b\u0438!":"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438!";return r.a.createElement("div",{className:"game-field-container"},!u&&r.a.createElement("h2",{className:"game-field-container__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442..."),u&&r.a.createElement("h2",{className:"game-field-container__title"},c),a&&u&&r.a.createElement("div",{className:"game-field-win"},r.a.createElement("p",{className:"game-field-container__text"},"\u0412 ",r.a.createElement("b",null,"\u043f\u043e\u043b\u0435 1")," \u0441\u043e\u0432\u043f\u0430\u043b\u043e ",i," \u0447\u0438\u0441\u043b\u0430:"),r.a.createElement("ul",{className:"game-field-list"},t.map(function(e){return r.a.createElement(d,{id:e,key:e,type:"fieldBig",press:!0,handleBtnPress:null})})),r.a.createElement("p",{className:"game-field-container__text"},"\u0412 ",r.a.createElement("b",null,"\u043f\u043e\u043b\u0435 2")," \u0441\u043e\u0432\u043f\u0430\u043b\u043e ",m," \u0447\u0438\u0441\u043b\u0430:"),r.a.createElement("ul",{className:"game-field-list"},n.map(function(e){return r.a.createElement(d,{id:e,key:e,type:"fieldBig",press:!0,handleBtnPress:null})}))),!a&&u&&r.a.createElement("div",{className:"game-field-fail"},r.a.createElement("p",{className:"game-field-container__text"},"\u0412 ",r.a.createElement("b",null,"\u043f\u043e\u043b\u0435 1")," \u0441\u043e\u0432\u043f\u0430\u043b\u043e ",i," \u0447\u0438\u0441\u043b\u0430:"),r.a.createElement("ul",{className:"game-field-list"},t.map(function(e){var t=!!l.length&&l.some(function(t){return t===e});return r.a.createElement(d,{id:e,key:e,type:"fieldBig",press:t,handleBtnPress:null})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"game-field-container__text"},"\u0412 ",r.a.createElement("b",null,"\u043f\u043e\u043b\u0435 2")," \u0441\u043e\u0432\u043f\u0430\u043b\u043e ",m," \u0447\u0438\u0441\u043b\u0430:"),r.a.createElement("ul",{className:"game-field-list"},n.map(function(e){var t=!!s.length&&s.some(function(t){return t===e});return r.a.createElement(d,{id:e,key:e,type:"fieldSmall",press:t,handleBtnPress:null})}))))},A={count:2,max:1},E={count:19,max:8},p=n(57),P=n.n(p),B=n(19),N=(n(85),n(117),function(e){return Array.from({length:e},function(e,t){return++t})}),_=function(e,t){var n=Object(B.a)(e);return t.btnPress?[].concat(Object(B.a)(n),[t.id]):Object(B.a)(n).filter(function(e){return e!==t.id})},v=function(e,t,n,a){return(e?t.length:t.length-1)<n?t:t.filter(function(e){return e!==a})},y=function(e,t,n){return function(e){for(var t,n,a=e.length;a--;)t=e[n=Math.random()*(a+1)<<0],e[n]=e[a],e[a]=t;return e}(Array.from({length:t-e},function(e,n){return t-n})).slice(0,n)},S=function(e,t,n,a){var r=y(0,19,a),l=y(0,2,n),s=0,i=0;return t.every(function(e){return r.includes(e)&&s++,t.includes(e)}),e.every(function(t){return l.includes(t)&&i++,e.includes(t)}),7!==s&&8!==s||1!==i?{randomBigArr:r,randomSmallArr:l,win:!1,bigResultCount:s,smallResultCount:i}:{randomBigArr:r,randomSmallArr:l,win:!0,bigResultCount:s,smallResultCount:i}},w=function(e,t,n,a,r,l,s){switch(e.type){case"fieldBig":return{newArr:v(e.btnPress,t,l,a),type:"big"};case"fieldSmall":return{newArr:v(e.btnPress,n,s,r),type:"small"};default:return!1}},F=(n(122),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={btnPressSmallArr:[],latestNumberSmall:null,btnPressBigArr:[],latestNumberBig:null,randomBigArr:[],randomSmallArr:[],win:!1,bigResultCount:0,smallResultCount:0,resultFlag:!1,queryDataFlag:!1},n.smallFieldArr=N(A.count),n.bigFieldArr=N(E.count),n.handleBtnPress=function(e){var t=n.state,a=t.btnPressBigArr,r=t.latestNumberBig,l=t.btnPressSmallArr,s=t.latestNumberSmall,i=w(e,a,l,r,s,E.max,A.max);if("big"===i.type)return n.setState({btnPressBigArr:_(i.newArr,e),latestNumberBig:e.id}),!0;n.setState({btnPressSmallArr:_(i.newArr,e),latestNumberSmall:e.id})},n.handleResult=function(){var e,t=n.state,a=t.btnPressSmallArr,r=t.btnPressBigArr,l=0,s=S(a,r,A.max,E.max);!function t(){var i={selectedNumber:{firstField:r,secondField:a},isTicketWon:s.win};P.a.post("/finch-test",{queryData:i}).then(function(e){console.log(e),console.log(e.data)}).catch(function(a){if(2===l)return clearTimeout(e),n.setState({queryDataFlag:!0}),!1;e=setTimeout(t,2e3),l++})}(),n.setState({randomBigArr:s.randomBigArr,randomSmallArr:s.randomSmallArr,win:s.win,bigResultCount:s.bigResultCount,smallResultCount:s.smallResultCount,resultFlag:!0})},n.handleGeneratedNumbers=function(){var e=y(0,19,E.max),t=y(0,2,A.max),a=e[e.length-1],r=t[t.length-1];n.setState({btnPressBigArr:e,latestNumberBig:a,btnPressSmallArr:t,latestNumberSmall:r,resultFlag:!1})},n.handleQueryPopupToggle=function(){return n.setState({queryDataFlag:!1})},n}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.btnPressBigArr,n=e.btnPressSmallArr,a=e.randomBigArr,l=e.randomSmallArr,s=e.win,i=e.bigResultCount,m=e.smallResultCount,u=e.resultFlag,c=e.queryDataFlag,o=t.length+n.length<A.max+E.max;return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game__item"},c&&r.a.createElement("div",{className:"game__query game-query-popup"},r.a.createElement("i",{onClick:this.handleQueryPopupToggle,className:"game-query-popup__btn-toggle"},"\u2716"),"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),r.a.createElement(b,{smallFieldArr:this.smallFieldArr,bigFieldArr:this.bigFieldArr,handleBtnPress:this.handleBtnPress,btnPressBigArr:t,btnPressSmallArr:n,handleResult:this.handleResult,btnPressLengthFlag:o,handleGeneratedNumbers:this.handleGeneratedNumbers})),r.a.createElement("div",{className:"game__item"},r.a.createElement(h,{randomBigArr:a,randomSmallArr:l,win:s,btnPressBigArr:t,btnPressSmallArr:n,bigResultCount:i,smallResultCount:m,resultFlag:u})))}}]),t}(a.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){},33:function(e,t,n){},58:function(e,t,n){e.exports=n(123)},64:function(e,t,n){},65:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.8fb48c12.chunk.js.map