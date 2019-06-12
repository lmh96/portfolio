import React from 'react';
import './App.css';

import Header from './Header.js';
import Background from './Background.js';
import About from './About.js';
import Projects from './Projects.js';
import SystemSettings from './SystemSettings.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'main',
      settingsVisible: false,
      hasVisibleOrbits: false,
      areSpinning: true,
      myProjects: [],
    }
  }

  aboutClick = () => {
    if (this.state.current !== 'about') {
      this.setState({
        current: 'about',
      });
    }
    else {
      this.setState({
        current: 'main',
      });
    }
  }

  projectClick = () => {
    if (this.state.current !== 'projects') {
      this.setState({
        current: 'projects',
      });
    }
    else {
      this.setState({
        current: 'main',
      });
    }
  }

  toggleSettingsClick = () => {
    if(this.state.settingsVisible) {
      this.setState({
        settingsVisible: false,
      })
    }
    else {
      this.setState({
        settingsVisible: true,
      })
    }
  }

  toggleOrbits = () => {
    if(this.state.hasVisibleOrbits) {
      this.setState({
        hasVisibleOrbits: false,
      })
    }
    else {
      this.setState({
        hasVisibleOrbits: true,
      })
    }
  }

  toggleAnimation = () => {
    if(this.state.areSpinning) {
      this.setState({
        areSpinning: false,
      })
    }
    else {
      this.setState({
        areSpinning: true,
      })
    }
  }

  componentDidMount() {
    fetch('/api/projects').then(res => res.json()).then((result) => {
      console.log(result);
      this.setState({
        myProjects: result,
      })
    })
  }

  render() {
    return (
      <div className="App" >
        <Header aboutClick={this.aboutClick} projectClick={this.projectClick}></Header>
        <Background className={this.state.current === 'main' ? 'bgCenter' : 'bgTop'} centerClick={this.toggleSettingsClick} 
          areSpinning={this.state.areSpinning} hasVisibleOrbits={this.state.hasVisibleOrbits}></Background>
        <About className={this.state.current === 'about' ? 'aboutActive' : 'aboutHidden'}></About>
        <Projects className={this.state.current === 'projects' ? 'projectsActive' : 'projectsHidden'} myProjects={this.state.myProjects}></Projects>
        <SystemSettings className={this.state.settingsVisible ? 'settingsContainer' : 'settingsConatinerHidden'} toggleSettingsClick={this.toggleSettingsClick} 
          orbitsClick={this.toggleOrbits} orbits={this.state.hasVisibleOrbits}
          animateClick={this.toggleAnimation} animate={this.state.areSpinning}></SystemSettings>
      </div>
    );
  }
}

export default App;
