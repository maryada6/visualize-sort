import React from 'react';
import './SortingVisualizer.css';
import {msAnimations} from '../sortingAlgorithms/mergeSort.js';
import {qsAnimations} from '../sortingAlgorithms/quickSort.js';
import {isAnimations} from '../sortingAlgorithms/insertionSort.js';
import {ssAnimations} from '../sortingAlgorithms/selectionSort.js';
import {bsAnimations} from '../sortingAlgorithms/bubbleSort.js';

//The colors, animation speed & data array parameters are set as constants
const MAIN_COLOR = 'blue';
const BACKGROUND_COLOR = 'rgb(185, 177, 177)';
var SPEED = 5;
const SIZE_OF_ARRAY = 210;
const LOWER_BOUND_DATA = 5;
const UPPER_BOUND_DATA = 460;


export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];

    if (window.matchMedia('(max-width: 320px)').matches) {
      for (let i = 0; i < 17; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }

    }
    else if (window.matchMedia('(max-width: 375px)').matches) {
      for (let i = 0; i < 20; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }


    }
    else if (window.matchMedia('(max-width: 450px)').matches) {
      for (let i = 0; i < 22; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }

    }
    else if (window.matchMedia('(max-width: 770px)').matches) {
      for (let i = 0; i < 70; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }

    }
    else if (window.matchMedia('(max-width: 1100px)').matches) {
      for (let i = 0; i < 133; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }


    }
    else if (window.matchMedia('(max-width: 1265px)').matches) {
      for (let i = 0; i < 168; i++) {
        array.push(this.randomIntFromInterval(5, 400));
      }


    }
    else {
      for (let i = 0; i < SIZE_OF_ARRAY; i++) {
        array.push(this.randomIntFromInterval(LOWER_BOUND_DATA, UPPER_BOUND_DATA));
      }

    }
    
    this.setState({
      array
    });

  }

  // Function to change speed based on slider
  changeSpeed() {
    const slider = document.getElementById('range');

    updateSpeed(slider.value);

    slider.oninput = () => {
      updateSpeed(this.value);
    }

    function updateSpeed(slider_val) {
      slider.style.background = "linear-gradient(to right, " 
        + MAIN_COLOR + " " + slider_val + "%, " 
        + BACKGROUND_COLOR + " 0%)";
      
      if (slider_val > 90 && slider_val <= 100) {
        SPEED = 1.3 - (slider_val - 91) * (0.3 / 9);
      }

      if (slider_val > 70 && slider_val <= 90) {
        SPEED = 1.8 - (slider_val - 71) * (0.5 / 19);
      }
      
      if (slider_val > 50 && slider_val <= 70) {
        SPEED = 2.3 - (slider_val - 51) * (0.5 / 19);
      }

      if (slider_val > 30 && slider_val <= 50) {
        SPEED = 2.8 - (slider_val - 31) * (0.5 / 19);
      }

      if (slider_val > 10 && slider_val <= 30) {
        SPEED = 3.3 - (slider_val - 11) * (0.5 / 19);
      }
      
      if (slider_val <= 10) {
        SPEED = 4.2 - (slider_val - 1) * (0.1 / 9);
      }

    }
  }
  
  // Function to render buttons obsolete during animation
  disableButtons(status, pter_status) {
    let generate_button = document.getElementById('button--generate');
    generate_button.disabled = status;
    generate_button.style.pointerEvents = pter_status;

    let insertion_sort_button = document.getElementById('insertion--sort');
    insertion_sort_button.disabled = status;
    insertion_sort_button.style.pointerEvents = pter_status;

    let selection_sort_button = document.getElementById('selection--sort');
    selection_sort_button.disabled = status;
    selection_sort_button.style.pointerEvents = pter_status;

    let merge_sort_button = document.getElementById('merge--sort');
    merge_sort_button.disabled = status;
    merge_sort_button.style.pointerEvents = pter_status;

    let bubble_sort_button = document.getElementById('bubble--sort');
    bubble_sort_button.disabled = status;
    bubble_sort_button.style.pointerEvents = pter_status;

    let quick_sort_button = document.getElementById('quick--sort');
    quick_sort_button.disabled = status;
    quick_sort_button.style.pointerEvents = pter_status;
  }

  // Obtained from : https://bit.ly/3hefvAI
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  insertionSort() {
    //Disable all other buttons
    this.disableButtons(true, 'none');

    const [animations] = isAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');

      if (animations[i][0] === "a" || animations[i][0] === "b") {
        const [temp, bar_one_id, bar_two_id] = animations[i];
        const color = (animations[i][0] === "a") ? MAIN_COLOR : BACKGROUND_COLOR;

        setTimeout(
          () => {
            arrBars[bar_one_id].style.backgroundColor = color;
            arrBars[bar_two_id].style.backgroundColor = color;
          }, i * SPEED
        );

      } else {
        
        setTimeout(
          () => {
            const [temp, bar_id, new_height] = animations[i];
            arrBars[bar_id].style.height = `${new_height}px`;
          }, i * SPEED
        );

      }
    }

    //Enable the buttons once animation is done
    const ENABLE_TIME = parseInt(SPEED * animations.length + 1000);
    setTimeout(
      () => {
        this.disableButtons(false, 'auto');
      }, ENABLE_TIME
    );
  }

  selectionSort() {
    this.disableButtons(true, 'none');

    const [animations] = ssAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');

      if (animations[i][0] === "a" || animations[i][0] === "b") {
        const [temp, bar_one_id, bar_two_id] = animations[i];
        const color = (animations[i][0] === "a") ? MAIN_COLOR : BACKGROUND_COLOR;

        setTimeout(
          () => {
            arrBars[bar_one_id].style.backgroundColor = color;
            arrBars[bar_two_id].style.backgroundColor = color;
          }, i * SPEED
        );

      } else {
        //
        const [temp, bar_id, new_height] = animations[i];

        setTimeout(
          () => {
            arrBars[bar_id].style.height = `${new_height}px`;
          }, i * SPEED
        );

      }
    }

    const ENABLE_TIME = parseInt(SPEED * animations.length + 1000);
    setTimeout(
      () => {
        this.disableButtons(false, 'auto');
      }, ENABLE_TIME
    );
  }

  bubbleSort() {
    this.disableButtons(true, 'none');

    const [animations] = bsAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');

      if (i % 4 === 0 || i % 4 === 1) {
        const [bar_one_id, bar_two_id] = animations[i];
        const color = (i % 4 === 0) ? MAIN_COLOR : BACKGROUND_COLOR;

        setTimeout(
          () => {
            arrBars[bar_one_id].style.backgroundColor = color;
            arrBars[bar_two_id].style.backgroundColor = color;
          }, i * SPEED
        );

      } else {
        const [bar_id, new_height] = animations[i];

        setTimeout(
          () => {
            arrBars[bar_id].style.height = `${new_height}px`;
          }, i * SPEED
        );

      }
    }

    const ENABLE_TIME = parseInt(SPEED * animations.length + 1000);
    setTimeout(
      () => {
        this.disableButtons(false, 'auto');
      }, ENABLE_TIME
    );
  }

  mergeSort() {
    this.disableButtons(true, 'none');

    const animations = msAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');

      if (i % 3 !== 2) {
        const [bar_one_id, bar_two_id] = animations[i];
        const color = (i % 3 === 0) ? MAIN_COLOR : BACKGROUND_COLOR;

        setTimeout(
          () => {
            arrBars[bar_one_id].style.backgroundColor = color;
            arrBars[bar_two_id].style.backgroundColor = color;
          }, i * SPEED
        );

      } else {

        setTimeout(
          () => {
            const [bar_one_id, new_height] = animations[i];
            arrBars[bar_one_id].style.height = `${new_height}px`;
          }, i * SPEED
        );

      }
    }

    const ENABLE_TIME = parseInt(SPEED * animations.length + 500);
    setTimeout(
      () => {
        this.disableButtons(false, 'auto');
      }, ENABLE_TIME
    );
  }

  quickSort() {
    this.disableButtons(true, 'none');

    const [animations] = qsAnimations(this.state.array);
    
    for (let i = 0; i < animations.length - 1; i++) {
      const arrBars = document.getElementsByClassName('array-bar');

      if (i % 4 === 0 || i % 4 === 1) {
        const [bar_one_id, bar_two_id] = animations[i];
        const color = (i % 4 === 0) ? MAIN_COLOR : BACKGROUND_COLOR;

        setTimeout(
          () => {
            arrBars[bar_one_id].style.backgroundColor = color;
            arrBars[bar_two_id].style.backgroundColor = color;
          }, i * SPEED
        );

      } else {
        const [bar_id, new_height] = animations[i];

        setTimeout(
          () => {
            arrBars[bar_id].style.height = `${new_height}px`;
          }, i * SPEED
        );

      }
    }

    const ENABLE_TIME = parseInt(SPEED * animations.length + 500);
    setTimeout(
      () => {
        this.disableButtons(false, 'auto');
      }, ENABLE_TIME
    );
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {
          array.map((value, idx) => (
            <div
                className="array-bar"
                key={idx}
                id="bar"
                style={{height: `${value}px`}}>
            </div>
          ))
        }
        <br></br>

        <div className="toolbar">
          
          <button className="button button--generate" id="button--generate" onClick={() => this.resetArray()}>
            Generate!
          </button>

          <div className="sort-buttons">
            <button className="button button--sort" id="insertion--sort" onClick={() => this.insertionSort()}>
              Insertion Sort
            </button>

            <button className="button button--sort" id="selection--sort" onClick={() => this.selectionSort()}>
              Selection Sort
            </button>

            <button className="button button--sort" id="merge--sort" onClick={() => this.mergeSort()}>
              Merge Sort
            </button>

            <button className="button button--sort" id="bubble--sort" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </button>

            <button className="button button--sort" id="quick--sort" onClick={() => this.quickSort()}>
              Quick Sort
            </button>
          </div>
        </div>
        <input className="slider" type="range" id="range" min="1" max="100" onChange={() => this.changeSpeed()}/>

      </div>
    );
  }
}


