<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
const rootEl = document.getElementById("root");


let render = () => {
    const MainApp = require('./App').default;
    ReactDOM.render(
      <MainApp />,
      rootEl
    );
};

if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      render(
        <NextApp />,
        rootEl
      );
  });
}

render() 
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 2ceaf839ec478be86940e0d070f1d3e7931feea6
