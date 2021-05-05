import React from 'react';
import ReactDOM from 'react-dom';
// import Shapes from './Shape';
import './index.css';

class Shape extends React.Component {
  // constructor() {
  //     super();
  // }

  getArea() {
      console.log('getArea method');
  }

  getName() {
      console.log('getName method');
  }

  increaseSize() {
      console.log('increaseSize method');
  }


  render() {
      return (
          <>
          <h2>Shapes</h2>
          <div className="shapes">
              <p>{this.getArea()}</p>
          </div>
          </>
      )
  }
}

function App () {
  return (
    <div className="Main">
      <h1>SC Coding Assessment</h1>
        <Shape />
    </div>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
