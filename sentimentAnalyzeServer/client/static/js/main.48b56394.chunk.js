(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(8),a=n.n(c),o=(n(13),n(2)),r=n(3),u=n(5),l=n(4),b=(n(7),n(14),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("table",{className:"table table-bordered",children:Object(b.jsx)("tbody",{})})})}}]),n}(s.a.Component),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={innercomp:Object(b.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderOutput=function(e){var n=1,i="url";"text"===e&&(i="text",n=4),t.setState({innercomp:Object(b.jsx)("textarea",{rows:n,cols:"50",id:"textinput"}),mode:i,sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".",n=t.state.mode;e=e+"/"+n+"/sentiment?"+n+"="+document.getElementById("textinput").value,fetch(e).then((function(e){e.text().then((function(e){t.setState({sentimentOutput:e});var n,i="white";switch(e){case"positive":i="green";break;case"negative":i="red";break;default:i="yellow"}n=Object(b.jsx)("div",{style:{color:{color:i},fontSize:20},children:e}),t.setState({sentimentOutput:n})}))}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".",n=t.state.mode;e=e+"/"+n+"/emotion?"+n+"="+document.getElementById("textinput").value,fetch(e).then((function(e){e.json().then((function(e){t.setState({sentimentOutput:Object(b.jsx)(j,{emotions:e})})}))}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("button",{className:"btn btn-info",onClick:function(){t.renderOutput("text")},children:"Text"}),Object(b.jsx)("button",{className:"btn btn-dark",onClick:function(){t.renderOutput("url")},children:"URL"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),this.state.innercomp,Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(b.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(b.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(s.a.Component),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),d()},7:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.48b56394.chunk.js.map