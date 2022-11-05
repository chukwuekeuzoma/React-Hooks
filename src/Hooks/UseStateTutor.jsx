import React, {useState} from 'react';

function UseStateTutor(props) {
   const [counter, setCounter] = useState(0)

   const increment = () => {
    //  setCounter((prev)=> prev + 1 )
     
    //  or you can do it like this

    setCounter(counter + 1)

   }

    return (
        <div>
             {counter}
            <button onClick={increment}>Increment </button>
        </div>
    );
}

export default UseStateTutor;