(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(2),s=a.n(n),c=(a(14),a(3)),l=a(4),o=a(6),m=a(5),u=a(7);a(15),a(16);var b=function(e){return r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Logan Hill"),r.a.createElement("div",{className:"linkedin-and-git"},r.a.createElement("a",{className:"git",href:"https://github.com/lmh96",target:"__blank"},r.a.createElement("i",{class:"fab fa-github-square"})),r.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/logan-hill-86828b166/",target:"__blank"},r.a.createElement("i",{class:"fab fa-linkedin"}))),r.a.createElement("nav",null,r.a.createElement("button",{class:"navBtn",onClick:e.aboutClick},"About"),r.a.createElement("button",{className:"navBtn",onClick:e.projectClick},"Projects")))};a(17);var f=function(e){var t={height:e.oDiameter,width:e.oDiameter,top:"calc(50% - "+(e.oDiameter/2+1)+"px)",left:"calc(50% - "+(e.oDiameter/2+1)+"px",animation:"spin-right "+e.dur+" linear infinite"};e.visible?(t.borderStyle="dashed",t.borderWidth=1):t.border="none";var a={height:e.pDiameter,width:e.pDiameter,top:"calc(50% - "+(e.pDiameter/2+2)+"px)"};return"left"===e.start?a.right="calc(100% - "+(e.pDiameter/2+2)+"px)":a.left="calc(100% - "+(e.pDiameter/2+2)+"px)",r.a.createElement("div",{className:e.className,style:t},r.a.createElement("div",{className:"planet",style:a}))};a(18);var h=function(e){var t=e.areSpinning,a=e.hasVisibleOrbits;return t="bgTop"!==e.className&&!!e.areSpinning,r.a.createElement("div",{className:e.className},r.a.createElement("button",{className:"center",onClick:e.centerClick},r.a.createElement("i",{class:"fas fa-cog"})),r.a.createElement(f,{className:"orbit",oDiameter:200,pDiameter:10,dur:t?"8.796s":"0s",start:"right",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:275,pDiameter:30,dur:t?"22.468s":"0s",start:"left",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:350,pDiameter:30,dur:t?"36.526s":"0s",start:"right",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:425,pDiameter:15,dur:t?"68.698s":"0s",start:"left",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:590,pDiameter:0,dur:t?"70s":"0s",start:"left",active:t,visible:!0}),r.a.createElement(f,{className:"orbit",oDiameter:600,pDiameter:0,dur:t?"72s":"0s",start:"right",active:t,visible:!0}),r.a.createElement(f,{className:"orbit",oDiameter:610,pDiameter:0,dur:t?"74s":"0s",start:"left",active:t,visible:!0}),r.a.createElement(f,{className:"orbit",oDiameter:620,pDiameter:0,dur:t?"76s":"0s",start:"right",active:t,visible:!0}),r.a.createElement(f,{className:"orbit",oDiameter:800,pDiameter:90,dur:t?"433.271s":"0s",start:"right",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:990,pDiameter:80,dur:t?"1075.144s":"0s",start:"left",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:1145,pDiameter:55,dur:t?"3068.555s":"0s",start:"right",active:t,visible:a}),r.a.createElement(f,{className:"orbit",oDiameter:1270,pDiameter:50,dur:t?"6015.565s":"0s",start:"left",active:t,visible:a}))};a(19);var g=function(e){return r.a.createElement("div",{className:"about",id:e.className},r.a.createElement("h1",{id:"title"},"About"),r.a.createElement("div",{id:"about-content"}))};a(20);var v=function(e){return r.a.createElement("div",{className:"projects",id:e.className},r.a.createElement("h1",{id:"title"},"Projects"),r.a.createElement("div",{id:"project-content"},e.myProjects.map(function(e){return r.a.createElement("div",{className:"project"},r.a.createElement("img",{className:"projectImg",src:e.image,alt:"X"}),r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{className:"projectGitBtn",href:e.git,target:"__blank"},r.a.createElement("i",{class:"fas fa-code"})),r.a.createElement("a",{className:"projectDeployBtn",href:e.deploy,target:"__blank"},r.a.createElement("i",{class:"fas fa-external-link-alt"})))}),r.a.createElement("div",{className:"project"},r.a.createElement("image",{className:"projectImg"}),r.a.createElement("h2",null,"Test Project"),r.a.createElement("p",null,"sdfasdf asdf adf asdf asf kqwef eiuvh wfuhv wifuvh wdfhv dwfvhwfuv wduhv wduf v wfuv hwfvuhwfvuwefv  wdfuvhwdfv uwhfv wfv fevuhwefvwf"),r.a.createElement("a",{className:"projectGitBtn",href:"google.com",target:"__blank"},r.a.createElement("i",{class:"fas fa-code"})),r.a.createElement("a",{className:"projectDeployBtn",href:"google.com",target:"__blank"},r.a.createElement("i",{class:"fas fa-external-link-alt"})))))};a(21);var d=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("button",{className:"exitButton",onClick:e.toggleSettingsClick},r.a.createElement("i",{class:"far fa-times-circle"})),r.a.createElement("br",null),r.a.createElement("br",null),"show orbits:",r.a.createElement("button",{className:"toggleButton",onClick:e.orbitsClick},e.orbits?r.a.createElement("i",{class:"far fa-check-circle"}):r.a.createElement("i",{class:"far fa-circle"})),r.a.createElement("br",null),r.a.createElement("br",null),"animate orbits:",r.a.createElement("button",{className:"toggleButton",onClick:e.animateClick},e.animate?r.a.createElement("i",{class:"far fa-check-circle"}):r.a.createElement("i",{class:"far fa-circle"})),r.a.createElement("br",null),r.a.createElement("br",null))},p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).aboutClick=function(){"about"!==a.state.current?a.setState({current:"about"}):a.setState({current:"main"})},a.projectClick=function(){"projects"!==a.state.current?a.setState({current:"projects"}):a.setState({current:"main"})},a.toggleSettingsClick=function(){a.state.settingsVisible?a.setState({settingsVisible:!1}):a.setState({settingsVisible:!0})},a.toggleOrbits=function(){a.state.hasVisibleOrbits?a.setState({hasVisibleOrbits:!1}):a.setState({hasVisibleOrbits:!0})},a.toggleAnimation=function(){a.state.areSpinning?a.setState({areSpinning:!1}):a.setState({areSpinning:!0})},a.state={current:"main",settingsVisible:!1,hasVisibleOrbits:!1,areSpinning:!0,myProjects:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/projects").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({myProjects:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{aboutClick:this.aboutClick,projectClick:this.projectClick}),r.a.createElement(h,{className:"main"===this.state.current?"bgCenter":"bgTop",centerClick:this.toggleSettingsClick,areSpinning:this.state.areSpinning,hasVisibleOrbits:this.state.hasVisibleOrbits}),r.a.createElement(g,{className:"about"===this.state.current?"aboutActive":"aboutHidden"}),r.a.createElement(v,{className:"projects"===this.state.current?"projectsActive":"projectsHidden",myProjects:this.state.myProjects}),r.a.createElement(d,{className:this.state.settingsVisible?"settingsContainer":"settingsConatinerHidden",toggleSettingsClick:this.toggleSettingsClick,orbitsClick:this.toggleOrbits,orbits:this.state.hasVisibleOrbits,animateClick:this.toggleAnimation,animate:this.state.areSpinning}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8e295a91.chunk.js.map