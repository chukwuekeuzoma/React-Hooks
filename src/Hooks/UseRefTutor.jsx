import React,{ useRef } from 'react';

function UseRefTutor(props) {
     const inputRef = useRef(null)

     const onClick = () => {
        // console.log(inputRef.current.value);
        inputRef.current.focus();
     }
    return (
        <div>
            <h1>Martins</h1>
            <input type="text" placeholder='Ex...' ref={inputRef}/>
            <button onClick={onClick}>Change name</button>
        </div>
    );
}

export default UseRefTutor;