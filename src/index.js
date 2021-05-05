import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Shape extends React.Component {
  constructor(r) {
    super()
    this.r = r;
    this.getArea = this.getArea.bind(this)
    this.getName = this.getName.bind(this)
    this.increaseSize = this.increaseSize.bind(this)
  }
  getName() {
      return Object.getPrototypeOf(this).constructor.name;
  }

  getArea() {
    if (this.getName() === 'Circle') {
      return (Math.PI * (this.r ** 2))
    } else return (this.r ** 2)
  };

  increaseSize = (num) => {
    const percent = num * .100
    return this.getArea() + (this.getArea() * percent)
  }

  render() {
      return (
          <>
          <h2>Shapes</h2>
          </>
      )
  }
}

class Square extends Shape {
  constructor(r) {
    super(r);
    
  }
  render() {
    return (
      <>
      </>
    )
  }
}

class Circle extends Shape {
  constructor(r) {
    super(r);
  }
  render() {
    return (
      <>
      </>
    )
  }
}

const shapes = [new Circle(2), new Square(3)]

const circle = shapes[0];
const square = shapes[1];

for (let i = 1; i < 100; i++) {
  console.log(circle.getArea(), circle.getName(), circle.increaseSize(i))
}

for (let i = 1; i < 100; i++) {
    console.log(square.getArea(), square.getName(), square.increaseSize(i))
}

function App() {
  return (
    <div className="Main">
      <h1>React OOP Shapes</h1>
    </div>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
