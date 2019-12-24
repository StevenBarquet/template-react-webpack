import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Componentes
import App from 'Comp/App';
import ImageExample from 'Comp/ImageExample';

class AppContainer extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/img" component={ImageExample} />
      </BrowserRouter>
    );
  }
}

export default AppContainer;
