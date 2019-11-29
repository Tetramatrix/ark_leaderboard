/* * *************************************************************
 * Copyright notice
 *
 * (c) 2019 Chi Hoang
 *  All rights reserved
 *
 * **************************************************************/
 
function List() {
  this.observerList = [];
  this.sort = "";
  this.func = "";
  return this;
} 
List.prototype = {
  add : function( obj ){
    return this.observerList.push( obj );
  },
  unshift : function( obj ){
    return this.observerList.unshift( obj );
  },
  count : function() {
    return this.observerList.length;
  },
  get : function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  },
  removeAt : function( from, to){
    this.from = from || 0;
    this.to = to || 1;    
    this.observerList.splice( from, to );
  },
  reset : function ( index ) {
	  this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.gold > b.gold) ? 1 : (b.gold > a.gold) ? -1 : 0 : -1;});
	  this.Create();
		this.sort = "";
		this.func = "";
  },
  filter1 : function ( index ) {
  	
  			//evo=true, respawn=true, ranking=Ranked						
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
				});
				
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}
								
			});
						
			//this.observerList.sort(function(a,b){return (a.gold < b.gold) ? 1 : (b.gold < a.gold) ? -1 : 0;});
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalr"));
			
			//evo=true, respawn=true, ranking=casual		
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
				});				
				
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}
			});
		
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalc"));
			
  },
  filter2 : function ( index ) {
  	
  		//evo=true, respawn=false, ranking=Ranked						
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
				});
				
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}				
			});
						
			//this.observerList.sort(function(a,b){return (a.gold < b.gold) ? 1 : (b.gold < a.gold) ? -1 : 0;});
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalr"));
			
  			//evo=true, respawn=false, ranking=casual						
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "true" && game.respawn[index] == "false" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
					
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}
				});				
			});
						
			//this.observerList.sort(function(a,b){return (a.gold < b.gold) ? 1 : (b.gold < a.gold) ? -1 : 0;});
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalc"));
  },
  filter3 : function ( index ) {
  	
  		//evo=false, respawn=true, ranking=Ranked						
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Ranked") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
				});
				
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}				
			});
						
			//this.observerList.sort(function(a,b){return (a.gold < b.gold) ? 1 : (b.gold < a.gold) ? -1 : 0;});
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalr"));
			
  			//evo=false, respawn=true, ranking=Casual						
			this.observerList.forEach(function (game, index) {
				
				var num=0;
				game.kills.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tkills=num;
				
				var num=0;
				game.deaths.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						num+=parseInt(item);	
					}
				});
				game.tdeaths=num;
				
				game.killr=Math.round(game.tkills/game.tdeaths * 100) / 100;
				if (isNaN(game.killr) || !isFinite(game.killr)) {
					game.killr=0;
				}
				game.gold=game.silver=game.bronze=game.games=0;
				
				game.place.forEach(function (item, index) {
					if (game.evo[index] == "false" && game.respawn[index] == "true" && game.fr[index] == "false" && game.ranking[index] == "Casual") {
						  
						  ++game.games;
						  
							if (item.substr(5,1) == 1 && item.length==6) {
								++game.gold;	
							}
							
							if (item.substr(5,1) == 2 && item.length==6) {
								++game.silver;
							}
							
							if (item.substr(5,1) == 3 && item.length==6) {
								++game.bronze;
							}
					}
				});
				
				if (game.games == 0) {
					game.visibility = "hidden";
				} else {
					game.visibility = "show";
				}				
			});
						
			//this.observerList.sort(function(a,b){return (a.gold < b.gold) ? 1 : (b.gold < a.gold) ? -1 : 0;});
			this.observerList.sort(function(a,b){return (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - b.bronze) || (b.tkills - a.tkills) ;});
			this.Print(window.document.getElementById("finalc"));
  }, 
  Print : function (ele) {
  	
			ele.innerHTML = '';
		
			var z=0;
  		this.observerList.forEach(function (item, index) {
  			
  			if (item.visibility == "show") {
  				
  				var colclass = (z % 2) ? "col1" : "col2";
		    		    
			    var e = new Subject(220); 
		    	e.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(e.ele);
		    	
	  			var a = document.createElement('a');
					var linkText = document.createTextNode(item.ele.innerText);
					a.appendChild(linkText);
					a.title = item.steamid;
					a.className = "linkclass";
					a.href = "https://steamcommunity.com/profiles/"+item.steamid;
					
					if (z<9) {
			    	e.ele.style.paddingLeft = "17px";
			    	e.ele.innerText = (z+1)+". "+e.ele.innerText;	
			    } else {
			    	e.ele.innerText = (z+1)+". "+e.ele.innerText;	
			    }
			    
		    	e.ele.appendChild(a);
		    			  
		    	var f = new Subject(90);    
		    	f.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(f.ele);
		    	f.ele.appendChild(window.document.createTextNode(item.gold));
		    
		    	var g = new Subject(90);    
		    	g.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(g.ele);
		    	g.ele.appendChild(window.document.createTextNode(item.silver));
		    	
		    	var h = new Subject(90);    
		    	h.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(h.ele);
		    	h.ele.appendChild(window.document.createTextNode(item.bronze));
		    	
		    	var i = new Subject(90);    
		    	i.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(i.ele);
		    	i.ele.appendChild(window.document.createTextNode(item.games));
		    	
		    	var j = new Subject(90);    
		    	j.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(j.ele);
		    	j.ele.appendChild(window.document.createTextNode(item.tkills));
		    	
		    	var k = new Subject(90);    
		    	k.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(k.ele);
		    	k.ele.appendChild(window.document.createTextNode(item.tdeaths));
		    	
		    	var l = new Subject(90);    
		    	l.ele.className = colclass + " " + item.ele.id;
		    	ele.appendChild(l.ele);
		    	l.ele.appendChild(window.document.createTextNode(item.killr));
		    	
		  		var m = new Subject(5);
					m.ele.className = "linebreak " + + item.ele.id;		
					ele.appendChild(m.ele);
					window.document.getElementById(m.ele.id).style.width=0;
					window.document.getElementById(m.ele.id).style.height=0;
					window.document.getElementById(m.ele.id).style.clear="both";
					window.document.getElementById(m.ele.id).style.float="none";
					
					++z;
  			}
			});		
	}
};
 
var Subject = function (width,height) {
  this.width = width+"px" || "150px";
  this.height = height+"px" || "20px";
	this.ele = document.createElement("div");
  this.ele.id = Math.floor((Math.random() * 768716276990) + 1);
  
  this.ele.className = "column";
  this.ele.style.whiteSpace="nowrap";
  //this.ele.style.display="block";
  this.ele.style.cssFloat="left";
  this.ele.style.width = this.width;
  this.ele.style.height = this.height;
  
  return this;
}

Subject.prototype = {
  update : function (parent,id) {
    this.ele.b=null;
  }
}

var Publisher = function (observers)
{
  this.xhr=[];
  this.observers = observers;
 return this;
}

Publisher.prototype = {
   Init : function () {
   	 var _self=this;
   	 this.observers.observerList=[];
   	 this.observers.response=[]; 			
   },
	CreateRequestObject : function () {
		var xmlHttp = false;
		if (typeof(XMLHttpRequest) != 'undefined') {
			xmlHttp = new XMLHttpRequest();
		}
		if (!xmlHttp) {
			try {
				xmlHttp  = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					xmlHttp  = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					xmlHttp  = false;
				}
			}
		}
		return xmlHttp;
	},
	NicknameSteamAPI : function (key,arrkeys,ptr,batch,players) {
		var i=0,  _self=this, steamids=[], cors="https://cors-anywhere.herokuapp.com/";
		this.xhr[i]= this.CreateRequestObject();		
		
		if (batch>0) {
				for (var j=0;j<batch;j++) {
					if (ptr+j<arrkeys.length) {
						steamids.push(arrkeys[ptr+j]);
					}
				}
				steamids=steamids.join(",",steamids);
		} else {
			steamids=arrkeys[ptr];
		}
		
		//https://stackoverflow.com/questions/56301030/how-get-steam-nickname-via-javascript
		if (this.xhr[i]) {
			this.xhr[i].open('GET',cors+'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+key+'&steamids='+steamids,
					true);
			this.xhr[i].timeout = this.timeout; // time in milliseconds
			this.xhr[i].ontimeout = function (e) {
					// XMLHttpRequest timed out. Do something here.
				alert("Sorry, timed out! Please try again!");
			};
			this.xhr[i].crossDomain = true;
			this.xhr[i].responseType = 'json';
			this.xhr[i].onreadystatechange = null;
			this.xhr[i].arrkeys=arrkeys;
			this.xhr[i].key=key;
			this.xhr[i].ptr=ptr;
			this.xhr[i].batch=batch;
			this.xhr[i].players=players;
			this.xhr[i].ranking=steamids;
			this.xhr[i].addEventListener( "load", function(e) { _self.ResponseCreate(e.currentTarget);}, false);
			this.xhr[i].send(null);
		}
	},
	ResponseCreate : function (e) {
		
		if (e.ptr<e.arrkeys.length) {
		
			var steamid;
		
			if (e.batch>0) {
				for (var j=0;j<e.batch;j++) {
					if (e.ptr+j<e.arrkeys.length) {
					
						steamid=e.ranking.split(",")[j];						
						
						this.Create(new Subject(220),
								e.response.response.players.find(x => x.steamid === steamid).communityvisibilitystate === 3 ? e.response.response.players.find(x => x.steamid === steamid).personaname : e.response.response.players.find(x => x.steamid === steamid).personaname,
								steamid,
								e.players[steamid].Place,
								e.players[steamid].Kills,
								e.players[steamid].Deaths,
								e.players[steamid]["ForceRestart"],
								e.players[steamid]["Respawn"],
								e.players[steamid]["Evolution"],
								e.players[steamid]["time"],
								e.players[steamid]["Ranking"],
								e.ptr);
						
						++e.ptr;
					}
				}
			}	else {
				
				  steamid=e.arrkeys[e.ptr];
					this.Create(new Subject(220),
							e.response.response.players.find(x => x.steamid === steamid).communityvisibilitystate === 3 ? e.response.response.players.find(x => x.steamid === steamid).personaname : 
							e.response.response.players.find(x => x.steamid === steamid).personaname,
							steamid,
							e.players[steamid].Place,
							e.players[steamid].Kills,
							e.players[steamid].Deaths,
							e.players[steamid]["ForceRestart"],
							e.players[steamid]["Respawn"],
							e.players[steamid]["Evolution"],
							e.players[steamid]["time"],
							e.players[steamid]["Ranking"], 
							e.ptr);				
					++e.ptr;
			}	
			
			this.NicknameSteamAPI("XXX",e.arrkeys,e.ptr,e.batch,e.players);
						
		} else {
			
			this.observers.filter1();
		}
		
	},
	Request : function  (url) {
		var i=0; var _self=this;
		this.xhr[i]= this.CreateRequestObject();		
		
		//https://stackoverflow.com/feeds/question/10943544
		if (this.xhr[i]) {
			this.xhr[i].open('GET',url,
					true);
			this.xhr[i].timeout = this.timeout; // time in milliseconds
			this.xhr[i].ontimeout = function (e) {
					// XMLHttpRequest timed out. Do something here.
				alert("Sorry, timed out! Please try again!");
			};
			this.xhr[i].crossDomain = true;
			this.xhr[i].responseType = 'json';
			this.xhr[i].onreadystatechange = null;
			this.xhr[i].addEventListener( "load", function(e) { _self.Response(e);}, false);
			this.xhr[i].send(null);
		}
	},
	Response: function (request) {
		var result, players={};
		result=request.target.response;	
		if (result!=null) {
			
			for (var i=0,e=result.length;i<e;i++) {
				var keys=Object.keys(result[i]);				
				for (var j of keys) {
					if (j.substr(0,5) == "Place") {
						if (!players[result[i][j]]) {
							
							players[result[i][j]]={};
							players[result[i][j]].Kills=[result[i]["Kills"+j.substr(5,1)]];
							players[result[i][j]].Deaths=[result[i]["Deaths"+j.substr(5,1)]];
							players[result[i][j]].Place=[j];
							players[result[i][j]].ForceRestart=[result[i]["ForceRestart"]];
							players[result[i][j]].Respawn=[result[i]["Respawn"]];
							players[result[i][j]].Evolution=[result[i]["Evolution"]];
							players[result[i][j]].time=[result[i]["time"]];
							players[result[i][j]].Ranking=[result[i]["Ranking"]];								
							players[result[i][j]].Gold=0;
							players[result[i][j]].Silver=0;
							players[result[i][j]].Bronze=0;
							players[result[i][j]].Games=1;
							players[result[i][j]].TotalKills=0;
							players[result[i][j]].TotalDeaths=0;
							players[result[i][j]].Killratio=0;
							
							if (j.substr(5,1) == 1 && j.length==6) {
								++players[result[i][j]].Gold;	
							}
							
							if (j.substr(5,1) == 2 && j.length==6) {
								++players[result[i][j]].Silver;
							}
							
							if (j.substr(5,1) == 3 && j.length==6) {
								++players[result[i][j]].Bronze;
							}
							
						} else if (players[result[i][j]]) {
							
							players[result[i][j]].Place.push(j);
							players[result[i][j]].Kills.push(result[i]["Kills"+j.substr(5,1)]);
							players[result[i][j]].Deaths.push(result[i]["Deaths"+j.substr(5,1)]);							
							players[result[i][j]].ForceRestart.push(result[i]["ForceRestart"]);
							players[result[i][j]].Respawn.push(result[i]["Respawn"]);
							players[result[i][j]].Evolution.push(result[i]["Evolution"]);
							players[result[i][j]].time.push(result[i]["time"]);
							players[result[i][j]].Ranking.push(result[i]["Ranking"]);	
							
							++players[result[i][j]].Games;
							
							if (j.substr(5,1) == 1 && j.length==6) {
								++players[result[i][j]].Gold;	
							}
							
							if (j.substr(5,1) == 2 && j.length==6) {
								++players[result[i][j]].Silver;
							}
							
							if (j.substr(5,1) == 3 && j.length==6) {
								++players[result[i][j]].Bronze;
							}
						}	
					}										
			  }
			}
			
			var keys=Object.keys(players);
			this.NicknameSteamAPI("50A9283F7BEB05AAFDA70C968FD6BBFD",keys,0,5,players);

			/*
			
			var keys=Object.keys(players);	
			var z=0;
			
			for (var i of keys) {
						
			  this.Create(new Subject(),i,players[i].Place,players[i].Kills,players[i].Deaths,
			  							players[i]["ForceRestart"],players[i]["Respawn"],players[i]["Evolution"],players[i]["time"],
			  							z);
			  
			  ++z;                 
			}
			
			this.observers.filter1();
			*/
			
		}		
   },
   Create : function(e,title,steamid,place,kills,deaths,fr,respawn, evo, time, ranking, z) {
		
	    e.title = title || 0;
	    e.fr = fr || 0;
		  e.respawn = respawn || 0;
		  e.evo = evo || 0;
		  e.time = time || 0;		  
		  e.ranking = ranking || 0;			  
		  e.place = place || 0;
		  e.kills = kills || 0;
		  e.deaths = deaths || 0;
		  e.steamid = steamid || 0;
		  
	    e.visibility = "show";
			
			var a = document.createElement('a');
			var linkText = document.createTextNode(title);
			a.appendChild(linkText);
			a.title = e.steamid;
			a.className = "linkclass";
			a.href = "https://steamcommunity.com/profiles/"+e.steamid;

			e.ele.appendChild(a);
			
		  this.observers.add(e);
  },
  Print : function() {
  	
  	  var z=0;
  		this.observers.observerList.forEach(function (item, index) {
  			
  	 		var colclass = (z % 2) ? "col1" : "col2";
		    		    
		    item.ele.className = colclass + " " + item.ele.id;
		    window.document.getElementById("final").appendChild(item.ele);
		    //var title = document.createElement("h4");
		    //title.innerHTML = e.title;
		    //item.appendChild(title);
				item.ele.appendChild(window.document.createTextNode(item.title));

	    	var f = new Subject();    
	    	f.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(f.ele);
	    	f.ele.appendChild(window.document.createTextNode(item.gold));
	    
	    	var g = new Subject();    
	    	g.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(g.ele);
	    	g.ele.appendChild(window.document.createTextNode(item.silver));
	    	
	    	var h = new Subject();    
	    	h.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(h.ele);
	    	h.ele.appendChild(window.document.createTextNode(item.bronze));
	    	
	    	var i = new Subject();    
	    	i.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(i.ele);
	    	i.ele.appendChild(window.document.createTextNode(item.games));
	    	
	    	var j = new Subject();    
	    	j.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(j.ele);
	    	j.ele.appendChild(window.document.createTextNode(item.tkills));
	    	
	    	var k = new Subject();    
	    	k.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(k.ele);
	    	k.ele.appendChild(window.document.createTextNode(item.tdeaths));
	    	
	    	var l = new Subject();    
	    	l.ele.className = colclass + " " + item.id;
	    	window.document.getElementById("final").appendChild(l.ele);
	    	l.ele.appendChild(window.document.createTextNode(item.killr));
	    	
	  		var m = new Subject();
				i.ele.className = "linebreak " + + item.id;		
				window.document.getElementById("final").appendChild(m.ele);
				window.document.getElementById(m.ele.id).style.width=0;
				window.document.getElementById(m.ele.id).style.height=0;
				window.document.getElementById(m.ele.id).style.clear="both";
				window.document.getElementById(m.ele.id).style.float="none";
				
				++z;
			
			});
  }
}

var l;
window.l = new Publisher(new List());
window.l.Init();
window.l.Request("http://5.9.152.107:3006/final_stand_results");