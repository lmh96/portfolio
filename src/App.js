import React from 'react';
import './App.css';

import Header from './Header.js';
import Background from './Background.js';
import About from './About.js';
import Projects from './Projects.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'main',
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

  render() {
    return (
      <div className="App" >
        <Header aboutClick={this.aboutClick} projectClick={this.projectClick}></Header>
        <Background className={this.state.current === 'main' ? 'bgCenter' : 'bgTop'}></Background>
        <About className={this.state.current === 'about' ? 'aboutActive' : 'aboutHidden'}></About>
        <Projects className={this.state.current === 'projects' ? 'projectsActive' : 'projectsHidden'}></Projects>
      </div>
    );
  }
}

export default App;
