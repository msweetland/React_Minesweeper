(this.webpackJsonpemojisweeper=this.webpackJsonpemojisweeper||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),s=n.n(i),r=(n(14),n(1)),c=n(2),h=n(4),u=n(3),l=n(5),m=n(6),v=function(){function e(){Object(r.a)(this,e),this.hasBomb=!1,this.hasBeenVisited=!1,this.clue=!1,this.showFlag=!1,this.showBomb=!1,this.showClue=!1,this.showWin=!1}return Object(c.a)(e,[{key:"currentView",value:function(){if(this.showWin)return"\ud83d\udd25";if(this.hasBeenVisited)return"\ud83d\udc4d";if(this.showBomb)return"\ud83d\udca3";if(this.showFlag)return"\ud83d\udea9";switch(this.clue){case 8:return"8\ufe0f\u20e3";case 7:return"7\ufe0f\u20e3";case 6:return"6\ufe0f\u20e3";case 5:return"5\ufe0f\u20e3";case 4:return"4\ufe0f\u20e3";case 3:return"3\ufe0f\u20e3";case 2:return"2\ufe0f\u20e3";case 1:return"1\ufe0f\u20e3";default:return"\u2b1c"}}},{key:"placeBomb",value:function(){this.hasBomb=!0}},{key:"removeBomb",value:function(){this.hasBomb=!1}},{key:"toggleFlag",value:function(){this.hasBeenVisited||(this.showFlag=!this.showFlag)}},{key:"toggleBomb",value:function(){this.showBomb=!this.showBomb}},{key:"toggleWin",value:function(){this.showWin=!this.showWin}},{key:"markVisited",value:function(){this.hasBeenVisited=!0}},{key:"unmarkVisited",value:function(){this.hasBeenVisited=!1}}]),e}(),f=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;Object(r.a)(this,e),this.getBoard=function(){return t.board},this.getGameStats=function(){return{moves:t.moves,isGameOver:t.isGameOver,isWinner:t.isWinner}},this.endGame=function(){t.isGameOver=!0,t.board.forEach((function(e){e.forEach((function(e){e.hasBomb&&e.toggleBomb()}))}))},this.winGame=function(){t.isGameOver=!0,t.isWinner=!0,t.board.forEach((function(e){e.forEach((function(e){e.hasBomb&&e.toggleWin()}))}))},this.search=function(e,n){var a=[];for(a.push([e,n]);a.length>0;){var o=a.pop(),i=o[0],s=o[1],r=t.board[i][s],c=[];i-1>=0&&s-1>=0&&c.push([i-1,s-1]),i-1>=0&&c.push([i-1,s]),i-1>=0&&s+1<t.numCols&&c.push([i-1,s+1]),s+1<t.numCols&&c.push([i,s+1]),i+1<t.numRows&&s+1<t.numCols&&c.push([i+1,s+1]),i+1<t.numRows&&c.push([i+1,s]),i+1<t.numRows&&s-1>=0&&c.push([i+1,s-1]),s-1>=0&&c.push([i,s-1]);var h=c.reduce((function(e,n){var a=Object(m.a)(n,2),o=a[0],i=a[1],s=t.board[o][i];return!s.hasBeenVisited&&s.hasBomb?e+1:e}),0);h>0?r.clue=h:(r.markVisited(),c.forEach((function(e){var n=Object(m.a)(e,2),o=n[0],i=n[1];t.board[o][i].hasBeenVisited||a.push([o,i])})))}},this.isPlacesToMove=function(){for(var e=0;e<t.numRows;++e)for(var n=0;n<t.numRows;++n){var a=t.board[e][n];if(!a.clue&&!a.hasBomb&&!a.hasBeenVisited)return!0}return!1},this.numRows=n,this.numCols=a,this.numBombs=Math.ceil(n*a)*o,this.moves=0,this.isGameOver=!1,this.isWinner=!1,this.board=Array.from({length:n},(function(){return Array.from({length:a},(function(){return new v}))})),this.placeBombs(this.numBombs-1)}return Object(c.a)(e,[{key:"placeBombs",value:function(e){for(var t=e;t>0;){var n=Math.floor(Math.random()*(this.numRows-0)),a=Math.floor(Math.random()*(this.numCols-0)),o=this.board[n][a];o.hasBomb||o.hasBeenVisited||(o.placeBomb(),t-=1)}}},{key:"primaryMove",value:function(e,t){var n=this.board[e][t];return this.isGameOver||n.hasBeenVisited||!this.isPlacesToMove()?this.board:(0===this.moves&&n.hasBomb?(n.removeBomb(),this.placeBombs(1),this.search(e,t)):n.hasBomb?this.endGame():n.clue||this.search(e,t),this.moves+=1,this.isPlacesToMove()||this.winGame(),console.log(n),this.board)}},{key:"secondaryMove",value:function(e,t){if(!this.isGameOver){var n=this.board[e][t];n.clue||n.toggleFlag()}return this.board}}]),e}(),b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onLeftClick=function(e){e.preventDefault();var t=n.props;(0,t.onLeftClick)(t.row,t.col)},n.onRightClick=function(e){e.preventDefault();var t=n.props;(0,t.onRightClick)(t.row,t.col)},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.tile;return o.a.createElement("button",{type:"button",onClick:this.onLeftClick,onContextMenu:this.onRightClick,className:"Tile"},o.a.createElement("span",null,e.currentView()))}}]),t}(o.a.Component),d=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onNewGame=function(e){e.preventDefault(),(0,n.props.onNewGame)()},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:this.onNewGame,className:"Options-Button"},o.a.createElement("h3",null,"New Game")))}}]),t}(o.a.Component),p=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).onNewGame=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15;e.game=new f(t,n,a);var o=e.game.getBoard();e.setState({board:o})},e.onMovePrimary=function(t,n){var a=e.game.primaryMove(t,n),o=e.game.getGameStats().isWinner;e.setState({board:a,isWinner:o})},e.onMoveSecondary=function(t,n){var a=e.game.secondaryMove(t,n);e.setState({board:a})},e.game=new f,e.state={board:e.game.getBoard()},e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.board,a=t.isWinner;return o.a.createElement("div",{className:"Presentation"},o.a.createElement("h1",null,a?"You Win!":"Emojisweeper"),o.a.createElement(d,{onNewGame:this.onNewGame}),o.a.createElement("div",null,n.map((function(t,n){return o.a.createElement("div",{className:"Row"},t.map((function(t,a){return o.a.createElement(b,{tile:t,row:n,col:a,key:"tile_".concat(1*n,"_").concat(1*a),onLeftClick:e.onMovePrimary,onRightClick:e.onMoveSecondary})})))}))))}}]),t}(o.a.Component);s.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.39fc56b1.chunk.js.map