import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import System from './desktop/System';
import Header from './desktop/Header';
import About from './desktop/About';
import Projects from './desktop/Projects';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: false,
      showMenu: false,
      myProjects: [],
      active: "main",
      view: "side",
      showrings: false,
      showPluto: false,
      aboutMe:
        <div>
          Currently a student at Georgia Tech full-stack development boot camp, previously a student at Kennesaw State for
          Software Engineering.<br></br><br></br><br></br>

          I started teaching myself to code in middle school (2008) with java, and have enjoyed it ever since! I've made just
          about every type of project I could think to make, from video games to websites and mobile apps, and I've
          messed around with more languages than I care to list. However I'm proficient in C#, Java, and JavaScript,
          as well as ASP.NET and HTML.<br></br><br></br><br></br>

          As of right now, my best languages are C#, ASP.NET, HTML, and JavaScript, but I'm looking in to more on a regular basis.
          My current side project is the angular web framework.<br></br><br></br><br></br>

          Currently looking for a job in full-stack development in Atlanta, or the Atlanta area.
        </div>
      ,
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    if (window.innerWidth < 600) {
      this.setState({
        isMobile: true,
      });
      console.log(true);
    }
    else {
      this.setState({
        isMobile: false,
      });
      console.log(false);
    }

    if (window.location.pathname === "/") {
      this.setState({
        active: "main"
      })
    }
    else {
      this.setState({
        active: "notMain"
      })
    }
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  changeView = () => {
    if (this.state.view === "side") {
      this.setState({
        view: "top",
      })
    }
    else {
      this.setState({
        view: "side",
      })
    }
  }

  changePage = () => {
    this.setState({
      active: "notMain",
      showMenu: false
    })
  }

  menuClick = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  gotoMain = () => {
    this.setState({
      active: "main",
      showMenu: false,
    })
  }

  componentDidMount() {
    fetch('/api/projects').then(res => res.json()).then((result) => {
      this.setState({
        myProjects: result,
      })
    })
  }

  render() {
    console.log(this.state.isMobile + " desktop");
    return (
      <Router>
        <div className="App" style={{ maxHeight: this.state.height, maxWidth: this.state.width, overflowX: "hidden", overflowY: "hidden", position: "relative", backgroundColor: "#1b1b1b" }}>
        <Header aboutClick={this.changePage} projectsClick={this.changePage} titleClick={this.gotoMain} menuClick={this.menuClick} showMenu={this.state.showMenu} isMobile={this.state.isMobile}></Header>
          <System centerClick={this.changeView} view={this.state.view} showRings={this.state.rings} showPluto={this.state.showPluto} active={this.state.active}></System>
          <Route exact path="/about" render={() => (
            <About content={this.state.aboutMe}></About>
          )} />
          <Route exact path="/projects" render={() => (
            <Projects myProjects={this.state.myProjects} isMobile={this.state.isMobile}></Projects>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
