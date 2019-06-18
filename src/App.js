import React from 'react';
import './App.css';

import Header from './desktop/Header.js';
import Background from './desktop/Background.js';
import About from './desktop/About.js';
import Projects from './desktop/Projects.js';
import SystemSettings from './desktop/SystemSettings.js';

import MHeader from './mobile/Header.js';
import MBackground from './mobile/Background.js';
import MAbout from './mobile/About.js';
import MProjects from './mobile/Projects.js';
import MSystemSettings from './mobile/SystemSettings.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      current: 'main',
      settingsVisible: false,
      hasVisibleOrbits: false,
      areSpinning: true,
      myProjects: [],
      allRingsVisible: false,
      showPluto: false,
      isMobile: false,
      mobileMenuHeight: 0, 
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    if (this.state.width < 600) {
      this.setState({
        isMobile: true,
      })
    }
    else {
      this.setState({
        isMobile: false,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  aboutClick = () => {
    if (this.state.current !== 'about') {
      this.setState({
        current: 'about',
        mobileMenuHeight: 0,
      });
    }
    else {
      this.setState({
        current: 'main',
        mobileMenuHeight: 0,
      });
    }
  }

  projectClick = () => {
    if (this.state.current !== 'projects') {
      this.setState({
        current: 'projects',
        mobileMenuHeight: 0,
      });
    }
    else {
      this.setState({
        current: 'main',
        mobileMenuHeight: 0,
      });
    }
  }

  toggleSettingsClick = () => {
    if (this.state.settingsVisible) {
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
    if (this.state.hasVisibleOrbits) {
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
    if (this.state.areSpinning) {
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

  toggleAllRings = () => {
    if (this.state.allRingsVisible) {
      this.setState({
        allRingsVisible: false,
      })
    }
    else {
      this.setState({
        allRingsVisible: true
      })
    }
  }

  togglePluto = () => {
    if (this.state.showPluto) {
      this.setState({
        showPluto: false,
      })
    }
    else {
      this.setState({
        showPluto: true,
      })
    }
  }

  showHideClick = () => {
    if(this.state.mobileMenuHeight === 0) {
      this.setState({
        mobileMenuHeight: 150,
      })
    }
    else {
      this.setState({
        mobileMenuHeight: 0,
      })
    }
  }

  componentDidMount() {
    fetch('/api/projects').then(res => res.json()).then((result) => {
      this.setState({
        myProjects: result,
      })
    })
  }

  render() {
    if (this.state.isMobile) {
      return (
        <div className="App" >
          <MHeader aboutClick={this.aboutClick} projectClick={this.projectClick} showHideClick={this.showHideClick} menuHeight={this.state.mobileMenuHeight}></MHeader>
          <MBackground centerClick={this.toggleSettingsClick}
            areSpinning={this.state.areSpinning} hasVisibleOrbits={this.state.hasVisibleOrbits} visibleRings={this.state.allRingsVisible}
            showPlutoLove={this.state.showPluto}></MBackground>
          <MAbout className={this.state.current === 'about' ? 'mobile-aboutActive' : 'mobile-aboutHidden'} closeClick={this.aboutClick} isMobile={this.state.isMobile}></MAbout>
          <MProjects className={this.state.current === 'projects' ? 'mobile-projectsActive' : 'mobile-projectsHidden'} closeClick={this.projectClick} myProjects={this.state.myProjects} isMobile={this.state.isMobile}></MProjects>
          <MSystemSettings className={this.state.settingsVisible ? 'mobile-settingsContainer' : 'mobile-settingsConatinerHidden'} toggleSettingsClick={this.toggleSettingsClick}
            orbitsClick={this.toggleOrbits} orbits={this.state.hasVisibleOrbits}
            animateClick={this.toggleAnimation} animate={this.state.areSpinning}
            ringsClick={this.toggleAllRings} rings={this.state.allRingsVisible}>
          </MSystemSettings>
        </div>
      );
    }
    else {
      return (
        <div className="App" >
          <Header aboutClick={this.aboutClick} projectClick={this.projectClick}></Header>
          <Background className={this.state.current === 'main' ? 'bgCenter' : 'bgTop'} centerClick={this.toggleSettingsClick}
            areSpinning={this.state.areSpinning} hasVisibleOrbits={this.state.hasVisibleOrbits} visibleRings={this.state.allRingsVisible}
            showPlutoLove={this.state.showPluto}></Background>
          <About className={this.state.current === 'about' ? 'aboutActive' : 'aboutHidden'} isMobile={this.state.isMobile}></About>
          <Projects className={this.state.current === 'projects' ? 'projectsActive' : 'projectsHidden'} myProjects={this.state.myProjects} isMobile={this.state.isMobile}></Projects>
          <SystemSettings className={this.state.settingsVisible ? 'settingsContainer' : 'settingsConatinerHidden'} toggleSettingsClick={this.toggleSettingsClick}
            orbitsClick={this.toggleOrbits} orbits={this.state.hasVisibleOrbits}
            animateClick={this.toggleAnimation} animate={this.state.areSpinning}
            ringsClick={this.toggleAllRings} rings={this.state.allRingsVisible}
            plutoClick={this.togglePluto} pluto={this.state.showPluto}>
          </SystemSettings>
        </div>
      );
    }
  }
}

export default App;
