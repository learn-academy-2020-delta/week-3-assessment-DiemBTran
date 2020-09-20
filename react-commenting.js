// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Line 11 is importing the Dice component from the same directory as the App.js component (although line 64 does mention that Dice lives in a different directory). You must import child components to the parent component so the parent can access and render the child components.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) Line 26 is creating state for the parent class Board. It's created in the parent class because the flow of state and props flows from parent to child. State is an object that holds key:value pairs that can reflect dynamic changes in data.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Line 35 is destructuring the state properties of rollImages and diceLog using the keyword let. Destructuring allows you to unpack this.state properties into individual variables so that you don't have to type this.state every time. 
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) Line 38 is doing several things. It's taking the randomly generated number from line 36 and using that number as an index to access the rollImages array in line 27. It's creating a new local variable newRoll, which is going to be assigned that specific dice image. newRoll is holding the value/image of the random roll. 
    let newRoll = rollImages[randomNum]
    // 5) After line 38 assigns the roll to a variable, we have to use the setState method to change Board's state because you can't reassign state directly. We are using setState to set two different properties: currentPic to the newRoll image and diceLog to a concatenated array of diceLog plus the newRoll image. 
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 6) In line 48, we are calling the component Dice inside Board's return. A component call must be made in order to actually render the component you've made onto the page.
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) Every component must use the render method in order to render the JSX you'd like to display. Within the render lives a single return, which can only house a single element. 
  render(){
    // 8) On line 72, we are destructuring the props of currentPic and roll into variables that are easier to access. Destructuring is done to save yourself from typing this.props every time you wanted to evoke props.
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) On line 79, the alt attribute is used to give a text alternative for the image. This text will be displayed if the image is not available and is also used to give context to users with visual impairment.
          alt="images of dice"
          // 10) On line 81, the image tag's source attribute should contain the location of the image you'd like to display. In this case, we are using the destructured value of currentPic as a prop from the parent component's state.
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
