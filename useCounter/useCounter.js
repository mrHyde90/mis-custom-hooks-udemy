//un custom hook es una simple función
import { useState } from 'react';

const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        console.log('jala');
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}

export default useCounter
