import React from 'react';

export default class Shape extends React.Component {
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
