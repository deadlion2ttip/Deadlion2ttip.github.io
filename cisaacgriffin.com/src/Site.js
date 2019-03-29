import React, { Component } from 'react';
import './Site.css';

class Site extends Component {
  render() {
    return (
      <div className="Site">
        <SplashPage />
        <ProjectsPage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
