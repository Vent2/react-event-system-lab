// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    render() {
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'

        return (
            <input type="password" onKeyUp={() => console.log('Entering password...')} />
        );
    }
}

export default Keypad;