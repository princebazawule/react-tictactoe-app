(this["webpackJsonpreact-tictactoe-app"]=this["webpackJsonpreact-tictactoe-app"]||[]).push([[0],{14:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var r=s(6),c=s(3),n=s(4),a=s(8),i=s(7),o=s(1),l=s.n(o),u=s(5),j=s.n(u),b=(s(14),s(0)),d=function(e){return Object(b.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},h=function(e){var t=function(t){return Object(b.jsx)(d,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"board-row",children:[t(0),t(1),t(2)]}),Object(b.jsxs)("div",{className:"board-row",children:[t(3),t(4),t(5)]}),Object(b.jsxs)("div",{className:"board-row",children:[t(6),t(7),t(8)]})]})},x=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).handleClick=function(e){var t=r.state.history.slice(0,r.state.stepNumber+1),s=t[t.length-1].squares.slice();O(s)||s[e]||(s[e]=r.state.xIsNext?"X":"O",r.setState({history:t.concat([{squares:s}]),stepNumber:t.length,xIsNext:!r.state.xIsNext}))},r.jumpTo=function(e){r.setState({stepNumber:e,xIsNext:e%2===0})},r.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(n.a)(s,[{key:"render",value:function(){var e,t=this,s=this.state.history,r=s[this.state.stepNumber],c=O(r.squares),n=s.map((function(e,s){var r=s?"Go to move #"+s:"Go to game start";return Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){return t.jumpTo(s)},children:r})},s)}));return e=c?"Winner: "+c:"Next player: "+(this.state.xIsNext?"X":"O"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"TicTacToe!"}),Object(b.jsx)("ul",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-board",children:Object(b.jsx)(h,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{children:e}),Object(b.jsx)("ol",{children:n})]})]})]})}}]),s}(l.a.Component);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var c=Object(r.a)(t[s],3),n=c[0],a=c[1],i=c[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}j.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.9754abbd.chunk.js.map