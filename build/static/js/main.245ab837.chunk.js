(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(20),l=a.n(i),r=(a(28),a(9)),c=a(10),o=a(12),m=a(11),u=a(13),d=a(6),h=a(5),v=(a(29),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"system",id:"main"===this.props.active?"":"blur"},s.a.createElement("button",{className:"center",id:"sol",onClick:this.props.centerClick}),s.a.createElement("div",{className:"side"===this.props.view?"mercuryY":"mercuryCenter"},s.a.createElement("div",{className:"side"===this.props.view?"mercuryX":"mercury"})),s.a.createElement("div",{className:"side"===this.props.view?"venusY":"venusCenter"},s.a.createElement("div",{className:"side"===this.props.view?"venusX":"venus"})),s.a.createElement("div",{className:"side"===this.props.view?"earthY":"earthCenter"},s.a.createElement("div",{className:"side"===this.props.view?"earthX":"earth"})),s.a.createElement("div",{className:"side"===this.props.view?"marsY":"marsCenter"},s.a.createElement("div",{className:"side"===this.props.view?"marsX":"mars"})),s.a.createElement("div",{className:"side"===this.props.view?"beltOS":"beltO"}),"side"===this.props.view?s.a.createElement("div",{className:"beltOSF"}):null,s.a.createElement("div",{className:"side"===this.props.view?"beltTS":"beltT"}),"side"===this.props.view?s.a.createElement("div",{className:"beltTSF"}):null,s.a.createElement("div",{className:"side"===this.props.view?"beltTRS":"beltTR"}),"side"===this.props.view?s.a.createElement("div",{className:"beltTRSF"}):null,s.a.createElement("div",{className:"side"===this.props.view?"beltFS":"beltF"}),"side"===this.props.view?s.a.createElement("div",{className:"beltFSF"}):null,s.a.createElement("div",{className:"side"===this.props.view?"jupiterY":"jupiterCenter"},s.a.createElement("div",{className:"side"===this.props.view?"jupiterX":"jupiter"},"side"===this.props.view?s.a.createElement("div",{className:"jupiterRing"}):s.a.createElement("div",{className:"jupiterRings"},s.a.createElement("div",{className:"jOne"}),s.a.createElement("div",{className:"jTwo"}),s.a.createElement("div",{className:"jThree"})))),s.a.createElement("div",{className:"side"===this.props.view?"saturnY":"saturnCenter"},s.a.createElement("div",{className:"side"===this.props.view?"saturnX":"saturn"},"side"===this.props.view?s.a.createElement("div",{className:"saturnRing"}):s.a.createElement("div",{className:"saturnRings"},s.a.createElement("div",{className:"sOne"}),s.a.createElement("div",{className:"sTwo"}),s.a.createElement("div",{className:"sThree"}),s.a.createElement("div",{className:"sFour"}),s.a.createElement("div",{className:"sFive"}),s.a.createElement("div",{className:"sSix"})))),s.a.createElement("div",{className:"side"===this.props.view?"uranusY":"uranusCenter"},s.a.createElement("div",{className:"side"===this.props.view?"uranusX":"uranus"},"side"===this.props.view?s.a.createElement("div",{className:"uranusRing"}):s.a.createElement("div",{className:"uranusRings"},s.a.createElement("div",{className:"uOne"}),s.a.createElement("div",{className:"uTwo"}),s.a.createElement("div",{className:"uThree"}),s.a.createElement("div",{className:"uFour"})))),s.a.createElement("div",{className:"side"===this.props.view?"neptuneY":"neptuneCenter"},s.a.createElement("div",{className:"side"===this.props.view?"neptuneX":"neptune"},"side"===this.props.view?s.a.createElement("div",{className:"neptuneRing"}):s.a.createElement("div",{className:"neptuneRings"},s.a.createElement("div",{className:"nOne"}),s.a.createElement("div",{className:"nTwo"}),s.a.createElement("div",{className:"nThree"})))),this.props.showPluto?s.a.createElement("div",null):null)}}]),t}(s.a.Component));a(30);var p=function(e){return s.a.createElement("header",null,s.a.createElement("h1",{className:"headerTitle",onClick:e.titleClick},s.a.createElement(d.b,{to:"/",className:"headerLink"},"Logan Hill")),e.isMobile?s.a.createElement("button",{className:e.showMenu?"fas fa-times headerButton":"fas fa-bars headerButton",onClick:e.menuClick}):null,s.a.createElement("div",{className:"headerNavContainer",style:e.showMenu?{maxHeight:257,height:257}:{maxHeight:0,height:0}},s.a.createElement("div",{className:"linkedin-and-git"},s.a.createElement("a",{className:"git",href:"https://github.com/lmh96",target:"__blank"},s.a.createElement("i",{className:"fab fa-github-square"})),s.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/logan-hill-86828b166/",target:"__blank"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("nav",null,s.a.createElement(d.b,{to:"/about",className:"headerLink"},s.a.createElement("button",{className:"aboutBtn",onClick:e.aboutClick},"About")),s.a.createElement(d.b,{to:"/projects",className:"headerLink"},s.a.createElement("button",{className:"projectsBtn",onClick:e.projectsClick},"Projects")))),e.showMenu&&e.isMobile?s.a.createElement("button",{className:"headerClose",onClick:e.menuClick}):null)};a(35);var E=function(e){return s.a.createElement("div",{className:"about"},s.a.createElement("h2",{className:"aboutTitle"},"About Me"),s.a.createElement("div",{className:"aboutContent"},e.content))};a(36);var w=function(e){return s.a.createElement("div",{className:"projects"},s.a.createElement("h1",{className:"projectsTitle"},"Projects"),s.a.createElement("div",{className:"projectsContent"},e.myProjects.map(function(t){return s.a.createElement("div",{className:"project"},!e.isMobile&&s.a.createElement("img",{className:"projectImg",src:t.image,alt:"X"}),s.a.createElement("h2",null,t.title),s.a.createElement("p",null,t.description),s.a.createElement("a",{className:"projectGitBtn",href:t.git,target:"__blank"},s.a.createElement("i",{className:"fas fa-code"})),s.a.createElement("a",{className:"projectDeployBtn",href:t.deploy,target:"__blank"},s.a.createElement("i",{className:"fas fa-external-link-alt"})))})))},b=(a(37),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a.changeView=function(){"side"===a.state.view?a.setState({view:"top"}):a.setState({view:"side"})},a.changePage=function(){a.setState({active:"notMain",showMenu:!1})},a.menuClick=function(){a.setState({showMenu:!a.state.showMenu})},a.gotoMain=function(){a.setState({active:"main",showMenu:!1})},a.state={width:window.innerWidth,height:window.innerHeight,isMobile:!1,showMenu:!1,myProjects:[],active:"main",view:"side",showrings:!1,showPluto:!1,aboutMe:s.a.createElement("div",null,"Currently a student at Georgia Tech full-stack development boot camp, previously a student at Kennesaw State for Software Engineering.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),"I started teaching myself to code in middle school (2008) with java, and have enjoyed it ever since! I've made just about every type of project I could think to make, from video games to websites and mobile apps, and I've messed around with more languages than I care to list. However I'm proficient in C#, Java, and JavaScript, as well as ASP.NET and HTML.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),"As of right now, my best languages are C#, ASP.NET, HTML, and JavaScript, but I'm looking in to more on a regular basis. My current side project is the angular web framework.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),"Currently looking for a job in full-stack development in Atlanta, or the Atlanta area.")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange),window.innerWidth<600?(this.setState({isMobile:!0}),console.log(!0)):(this.setState({isMobile:!1}),console.log(!1)),"/"===window.location.pathname?this.setState({active:"main"}):this.setState({active:"notMain"})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/projects").then(function(e){return e.json()}).then(function(t){e.setState({myProjects:t})})}},{key:"render",value:function(){var e=this;return console.log(this.state.isMobile+" desktop"),s.a.createElement(d.a,null,s.a.createElement("div",{className:"App",style:{maxHeight:this.state.height,maxWidth:this.state.width,overflowX:"hidden",overflowY:"hidden",position:"relative",backgroundColor:"#1b1b1b"}},s.a.createElement(p,{aboutClick:this.changePage,projectsClick:this.changePage,titleClick:this.gotoMain,menuClick:this.menuClick,showMenu:this.state.showMenu,isMobile:this.state.isMobile}),s.a.createElement(v,{centerClick:this.changeView,view:this.state.view,showRings:this.state.rings,showPluto:this.state.showPluto,active:this.state.active}),s.a.createElement(h.a,{exact:!0,path:"/about",render:function(){return s.a.createElement(E,{content:e.state.aboutMe})}}),s.a.createElement(h.a,{exact:!0,path:"/projects",render:function(){return s.a.createElement(w,{myProjects:e.state.myProjects,isMobile:e.state.isMobile})}})))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.245ab837.chunk.js.map