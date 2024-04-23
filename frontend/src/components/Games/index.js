
import React from 'react';
import Sketch from 'react-p5';
import './games.css'
var x = 50;
var speed = 5;
function Games() {

function twoDArray(col, row){
    let arr = new Array(col)
    for (let i = 0; i< arr.length; i++){
        arr[i] = new Array(row)
    }
    return arr
}

let col = 400
let row = 125
let singleGrainOfSandSize = 4
let grid  = twoDArray(col, row)


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1200, 500).parent(canvasParentRef);
        p5.background(0)
    }

    const draw = (p5) => {
        // draw a grain of sand

    // p5.rect(50,50, singleGrainOfSandSize)
    
    }



    return (<div className='container'>

    
        <Sketch className="sketch" setup={setup} draw={draw} /></div>
    )
}

export default Games;